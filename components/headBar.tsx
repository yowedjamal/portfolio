"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Linkedin, Twitter, Phone, Mail } from "lucide-react";

export function HeadBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "À propos", href: "/about" },
    { name: "Projets", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="items-center md:items-start hidden md:flex">
              <Mail className="h-6 w-6 mr-2" /><a href="mailto:contact@djamal.site" className="mr-2"> contact@djamal.site</a>
              <Phone className="h-6 w-6 mr-2" /><a href="tel:+2290157512489"> +229 01-57-51-24-89</a>
          </div>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <Link
              href="https://www.linkedin.com/in/djamal-yowe-gani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground/80"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://x.com/DjamalDevops"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground/80"
            >
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
