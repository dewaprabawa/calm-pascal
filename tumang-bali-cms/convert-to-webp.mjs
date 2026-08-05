#!/usr/bin/env node
// Convert all images in public/images/ to WebP (with Sharp)
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
      continue;
    }
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      try {
        execSync(`sharp "${filePath}" -o "${filePath}.webp" -q 80 --progressive`, {
          cwd: __dirname,
          stdio: 'ignore'
        });
        console.log(`✅ ${filePath}`);
      } catch (e) {
        console.error(`❌ ${filePath} - ${e.message}`);
      }
    }
  }
}

console.log('🔄 Converting images to WebP...\n');
processDir(IMAGES_DIR);
console.log('\n✅ Done!');
