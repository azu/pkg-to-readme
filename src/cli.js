#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import meow from "meow";
import { pkg2readme } from "./index.js";

const cli = meow(`
  Usage
  $ pkg-to-readme
  
  Options
  -t, --template  Path to template file. default: ~/.readme-genrc
  -o, --output    Path to output. default: ./README.md
  -f, --force     Force update

`, {
    importMeta: import.meta,
    alias: {
        f: 'force',
        t: 'template',
        o: 'output'
    }
});

if (!cli.flags.force && fs.existsSync(path.resolve('README.md'))) {
    console.log('README.md already exists');
    process.exit(1);
} else {
    pkg2readme(cli.flags).then(() => {
        console.log('successfully generated README.md');
    }).catch(error => {
        console.error(error.message, error.stack);
        process.exit(1);
    });
}
