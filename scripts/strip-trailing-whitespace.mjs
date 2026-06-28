import { readFileSync, writeFileSync } from 'node:fs';

for (const file of process.argv.slice(2)) {
  const input = readFileSync(file, 'utf8');
  const output = input.replace(/[ \t]+$/gm, '');
  if (output !== input) writeFileSync(file, output);
}
