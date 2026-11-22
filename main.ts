// make.fun news-image-20261121 — entry program.
//
// The poster beside this file is already drawn; this program only
// delivers it. Node 22, standard library, no network. A plain byte
// copy from the repository to the output directory keeps two runs
// byte-for-byte identical.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const POSTER_NAME = 'entry.png';
const sourceDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(sourceDir, POSTER_NAME), join(outputDir, POSTER_NAME));
