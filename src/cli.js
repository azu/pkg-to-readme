#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const meow = require('meow');
const pkg2readme = require('./index.js');
const cli = meow(`
  Usage
  $ pkg-to-readme
  
  Options
  -t, --template  Path to template file. default: ~/.readme-genrc
  -o, --output    Path to output. default: ./README.md
  -f, --force     Force update

`, {
    alias: {
        f: 'force',
        t: 'template',
        o: 'output'
    }
});

if (!cli.flags.force && fs.existsSync(path.resolve('README.md'))) {
    console.log('README.md already exists');
} else {
    pkg2readme(cli.flags).then(()=> {
        console.log('successfully generated README.md');
    }).catch(error => {
        console.error(error.message, error.stack);
        process.exit(1);
    });
}
