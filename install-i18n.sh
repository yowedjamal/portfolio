#!/bin/bash

echo "🌍 Installation des packages d'internationalisation..."

# Installer next-intl
npm install next-intl

# Installer les types si nécessaire
npm install --save-dev @types/react-intl

echo "✅ Packages d'internationalisation installés avec succès!"
echo "🔄 Redémarrez le serveur de développement avec: npm run dev"