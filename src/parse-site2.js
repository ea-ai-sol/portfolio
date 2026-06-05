import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import fs from 'fs';

async function run() {
  const res = await fetch('https://sites.google.com/view/neurovia/ai/aaas');
  const html = await res.text();
  const dom = new JSDOM(html);
  
  // Just focusing on the main content part. Google Sites usually has deep structure.
  // We'll select all headers and paragraphs and list items.
  const elements = dom.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li');
  let resultTemplate = 'export const articleContent = [\n';
  
  let started = false;
  
  for (const el of elements) {
    const text = el.textContent.trim().replace(/"/g, '\\"').replace(/\n/g, ' ');
    if (text) {
      if (text.includes('Agentic AI: Transforming Productivity')) started = true;
      if (started) {
        resultTemplate += `  { tag: '${el.tagName}', text: "${text}" },\n`;
      }
    }
  }
  resultTemplate += '];\n';
  fs.writeFileSync('src/articleContent.ts', resultTemplate);
}
run();
