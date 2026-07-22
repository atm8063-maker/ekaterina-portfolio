const { readFileSync, writeFileSync } = require('fs');
const pdfParse = require('pdf-parse');

const data = readFileSync('C:/Users/Екатерина/Downloads/Profile.pdf');
pdfParse(data).then(d => {
  writeFileSync('./profile_text.txt', d.text, 'utf8');
  console.log(d.text);
}).catch(e => console.error(e));
