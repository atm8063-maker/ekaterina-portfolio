const fs = require('fs');
const files = [
  'case_1_astro_directus.md', 'case_2_telegram_uploader.md', 'case_3_autoposter.md',
  'case_4_admin_bot.md', 'case_5_translator_bot.md', 'case_6_mafia_bot.md',
  'case_7_restaurant_menu.md', 'case_8_accountant_bot.md'
];
const htmlFiles = [
  '01-astro-directus.html', '02-tg-uploader.html', '03-autoposter.html',
  '04-tg-admin.html', '05-translator.html', '06-mafia.html',
  '07-serverless-menu.html', '08-accountant.html'
];
const cases = files.map((f, i) => {
  const content = fs.readFileSync('C:/Users/Екатерина/Downloads/' + f, 'utf8');
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : 'Project ' + (i+1);
  const subMatch = content.match(/<p class="case-hero-sub">([\s\S]*?)<\/p>/);
  let desc = subMatch ? subMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
  return { id: String(i+1).padStart(2, '0'), filename: htmlFiles[i], title, description: desc };
});
console.log(JSON.stringify(cases, null, 2));
