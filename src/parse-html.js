import fs from 'fs';
const html = fs.readFileSync('src/site.html', 'utf8');

const text = html.replace(/<[^>]+>/g, '\n').replace(/\s+/g, ' ');
fs.writeFileSync('src/site.txt', text);
