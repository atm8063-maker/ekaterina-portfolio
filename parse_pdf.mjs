import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const data = readFileSync('C:/Users/Екатерина/Downloads/Profile.pdf');
pdf(data).then(d => {
  writeFileSync('./profile_text.txt', d.text, 'utf8');
  console.log(d.text);
}).catch(e => console.error(e));
