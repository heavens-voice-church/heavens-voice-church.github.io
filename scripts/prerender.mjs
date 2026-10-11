import {readFileSync, writeFileSync, rmSync} from 'node:fs';
import {pathToFileURL} from 'node:url';
import {resolve} from 'node:path';

const {render} = await import(pathToFileURL(resolve('dist-server/entry-server.js')).href);
const indexPath = resolve('dist/index.html');
const shell = readFileSync(indexPath, 'utf-8');
const marker = '<div id="root"></div>';
if (!shell.includes(marker)) throw new Error('prerender: root marker not found in dist/index.html');

writeFileSync(indexPath, shell.replace(marker, `<div id="root">${render()}</div>`));
rmSync(resolve('dist-server'), {recursive: true, force: true});
console.log('prerender: dist/index.html updated');
