import hljs from 'highlight.js';
import fs from 'node:fs/promises';

export const codeLoader = async () => {
  const raw = await fs.readFile('src/assets/code/planus-leo.ts.txt', 'utf-8');
  const highlighted = hljs.highlight(raw, { language: 'typescript' }).value;

  return highlighted;
}
