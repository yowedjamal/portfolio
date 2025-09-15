"use client"

import * as React from "react"
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

interface LanguageSelectorProps {
  currentLocale?: string;
}

export function LanguageSelector({ currentLocale = 'fr' }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Simple logic for now - will be enhanced when next-intl is installed
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    const newPath = newLocale === 'fr' ? pathWithoutLocale : `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center space-x-2 p-2",
            "bg-white/10 hover:bg-white/20",
            "text-white border border-white/10 hover:border-white/20",
            "transition-all duration-200",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          )}
          aria-label="Changer de langue"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">
            {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "bg-gradient-to-r from-nav-gradient-from to-nav-gradient-to",
          "dark:from-dark-nav-gradient-from dark:to-dark-nav-gradient-to",
          "border border-white/20 dark:border-white/10",
          "backdrop-blur-lg"
        )}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => switchLocale(language.code)}
            className={cn(
              "flex items-center space-x-2 p-3",
              "text-white hover:bg-white/20",
              "transition-colors duration-200",
              "focus:bg-white/20",
              currentLocale === language.code && "bg-white/20"
            )}
          >
            <span className="text-lg">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
            {currentLocale === language.code && (
              <span className="ml-auto text-xs opacity-70">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}