import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import fs from 'fs';

async function run() {
  const res = await fetch('https://sites.google.com/view/neurovia/ai/aaas');
  const html = await res.text();
  const dom = new JSDOM(html);
  
  const elements = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li');
  let resultTemplate = 'export const articleContent: { tag: string, text: string, href?: string }[] = [\n';
  
  let started = false;
  let seenTexts = new Set();
  
  for (const el of elements) {
    const text = el.textContent.trim().replace(/"/g, '\\"').replace(/\n/g, ' ');
    if (text) {
      if (text.includes('Agentic AI: Transforming Productivity')) started = true;
      if (started) {
        // Find if there is an anchor tag
        const a = el.querySelector('a');
        let href = a ? a.href : '';
        
        // Handle Google Sites redirect URLs for the links
        if (href.startsWith('https://www.google.com/url?q=')) {
          href = decodeURIComponent(href.split('url?q=')[1].split('&')[0]);
        }
        
        // Let's avoid consecutive duplicates (Google Sites often has a P and an LI with the same text)
        if (!seenTexts.has(text)) {
           resultTemplate += `  { tag: '${el.tagName}', text: "${text}"${href ? `, href: "${href}"` : ''} },\n`;
           seenTexts.add(text);
        }
      }
    }
  }
  resultTemplate += '];\n';
  fs.writeFileSync('src/articleContent.ts', resultTemplate);
}
run();
