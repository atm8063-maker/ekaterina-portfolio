const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'public', 'Кейсы');

const dirs = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

dirs.forEach(caseDir => {
  const dir = path.join(baseDir, caseDir);
  fs.readdirSync(dir).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const filePath = path.join(dir, file);
      sharp(filePath).metadata().then(metadata => {
        console.log(`Processing ${caseDir}/${file}: ${metadata.width}x${metadata.height}`);
        // crop bottom 12%
        const cropHeight = Math.floor(metadata.height * 0.12);
        return sharp(filePath)
          .extract({ left: 0, top: 0, width: metadata.width, height: metadata.height - cropHeight })
          .toFile(filePath + '.cropped.jpg')
          .then(() => {
            fs.renameSync(filePath + '.cropped.jpg', filePath);
            console.log(`Cropped ${caseDir}/${file}`);
          });
      }).catch(err => {
        console.log(`Error processing ${file}:`, err);
      });
    }
  });
});
