const fs = require('fs');
const files = [
  'C:/Users/Екатерина/.gemini/portfolio Ekaterina/app/art-v2/page.tsx',
  'C:/Users/Екатерина/.gemini/portfolio Ekaterina/app/art/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find everything between the image container and the text block container
  const startMarker = 'translate-x-[105px] sm:translate-x-0\\">\\n              <Image';
  const endMarker = '<div className="relative z-10 w-full px-6';
  
  // Actually, let's just use regex to replace all invalid unicode replacement characters
  content = content.replace(/\uFFFD/g, '');
  
  // And let's remove any literal \r\n that might be written as text
  content = content.replace(/\\r\\n/g, '\n');

  // Let's also fix the alt tag that got corrupted
  content = content.replace(/alt=".*?"/g, 'alt="Gallery image"');

  // And remove the corrupted comments
  content = content.replace(/{\/\*.*?\*\/}/g, '');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Cleaned ' + file);
}
