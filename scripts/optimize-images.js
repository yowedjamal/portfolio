const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const outputDir = './public/images/optimized';

// Créer le dossier de sortie s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Fonction pour optimiser une image
async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInKB = stats.size / 1024;
    
    console.log(`Optimisation de ${path.basename(inputPath)} (${fileSizeInKB.toFixed(2)} KB)...`);
    
    await sharp(inputPath)
      .resize(1200, 800, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .jpeg({ 
        quality: 85,
        progressive: true 
      })
      .toFile(outputPath);
    
    const newStats = fs.statSync(outputPath);
    const newFileSizeInKB = newStats.size / 1024;
    const savings = ((fileSizeInKB - newFileSizeInKB) / fileSizeInKB * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(outputPath)} créé (${newFileSizeInKB.toFixed(2)} KB, -${savings}%)`);
  } catch (error) {
    console.error(`❌ Erreur lors de l'optimisation de ${inputPath}:`, error);
  }
}

// Optimiser toutes les images
async function optimizeAllImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg|jpeg)$/i, '.jpg'));
    
    if (/\.(png|jpg|jpeg)$/i.test(file)) {
      await optimizeImage(inputPath, outputPath);
    }
  }
  
  console.log('\n🎉 Optimisation terminée !');
}

optimizeAllImages();
