# 🌍 Guide d'Internationalisation (i18n) du Portfolio

## Configuration Actuelle

Votre portfolio est maintenant configuré pour supporter **2 langues** :
- 🇫🇷 **Français** (langue par défaut)
- 🇺🇸 **Anglais**

## Structure des Fichiers

```
portfolio/
├── messages/
│   ├── fr.json          # Traductions françaises
│   └── en.json          # Traductions anglaises
├── hooks/
│   └── useTranslations.ts # Hook de traduction temporaire
├── components/
│   ├── navbar-new.tsx    # Navbar avec support i18n
│   └── language-selector.tsx # Sélecteur de langue
├── i18n.ts              # Configuration i18n
├── middleware.ts        # Middleware de routing
└── app/[locale]/        # Pages avec support des locales
```

## Installation des Packages

Pour activer complètement l'internationalisation :

```bash
# Installer next-intl
npm install next-intl

# Ou utiliser le script fourni
bash install-i18n.sh
```

## Utilisation

### 1. Dans les Composants

```tsx
import { useTranslations } from '@/hooks/useTranslations';

export function MonComposant() {
  const { t, locale } = useTranslations();
  
  return (
    <h1>{t('home.title')}</h1>
  );
}
```

### 2. Ajouter de Nouvelles Traductions

Éditez les fichiers `messages/fr.json` et `messages/en.json` :

```json
{
  "nouveau": {
    "titre": "Mon nouveau titre",
    "description": "Ma nouvelle description"
  }
}
```

### 3. Utiliser le Sélecteur de Langue

Le sélecteur est déjà intégré dans la navbar et permet de changer de langue instantanément.

## URLs Multilingues

- **Français** : `https://portfolio.com/` (par défaut)
- **Anglais** : `https://portfolio.com/en/`

## Features Actuelles

✅ **Navbar multilingue** avec sélecteur de langue  
✅ **Hook de traduction** fonctionnel  
✅ **Changement de langue** en temps réel  
✅ **Sauvegarde de préférence** dans localStorage  
✅ **URLs localisées** prêtes  
⏳ **Integration next-intl** (après installation des packages)

## Prochaines Étapes

1. Installer les packages avec `npm install next-intl`
2. Migrer vers next-intl pour plus de fonctionnalités
3. Traduire toutes les sections du portfolio
4. Ajouter d'autres langues si nécessaire

## Support

Le système est conçu pour être facilement extensible. Pour ajouter une nouvelle langue :

1. Créer `messages/xx.json`
2. Ajouter la langue dans `languages` array
3. Mettre à jour la configuration i18n

🎉 **Votre portfolio est maintenant prêt pour l'international !**