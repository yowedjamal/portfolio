"use client"

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Traductions simples
const translations = {
  fr: {
    'navbar.home': 'Accueil',
    'navbar.about': 'À propos', 
    'navbar.projects': 'Projets',
    'navbar.contact': 'Contact',
    'navbar.lightMode': 'Mode clair',
    'navbar.darkMode': 'Mode sombre',
    'navbar.openMenu': 'Ouvrir le menu',
    'navbar.closeMenu': 'Fermer le menu',
    'home.title': 'Djamal GANI',
    'home.subtitle': 'Expert DevOps & Développeur Full-Stack',
    'contact.title': 'Contactez-moi',
    'projects.title': 'Portfolio de Projets'
  },
  en: {
    'navbar.home': 'Home',
    'navbar.about': 'About',
    'navbar.projects': 'Projects', 
    'navbar.contact': 'Contact',
    'navbar.lightMode': 'Light mode',
    'navbar.darkMode': 'Dark mode',
    'navbar.openMenu': 'Open menu',
    'navbar.closeMenu': 'Close menu',
    'home.title': 'Djamal GANI',
    'home.subtitle': 'DevOps Expert & Full-Stack Developer',
    'contact.title': 'Contact me',
    'projects.title': 'Project Portfolio'
  }
};

export function useTranslations() {
  const [locale, setLocale] = useState<'fr' | 'en'>('fr');
  const pathname = usePathname();

  useEffect(() => {
    // Détecter la langue depuis l'URL
    if (pathname.startsWith('/en')) {
      setLocale('en');
    } else {
      setLocale('fr');
    }
  }, [pathname]);

  const t = (key: string): string => {
    return translations[locale][key as keyof typeof translations.fr] || key;
  };

  const changeLocale = (newLocale: 'fr' | 'en') => {
    setLocale(newLocale);
    // Sauvegarder dans localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
    }
  };

  return { t, locale, changeLocale };
}