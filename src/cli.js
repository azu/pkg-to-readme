#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const meow = require('meow');
const pkg2readme = require('./');
const logSymbols = require('log-symbols');
const cli = meow(`
  Usage
  $ pkg-to-readme
  
  Options
  -t, --template  Path to template file. default: ~/.readme-genrc
  -o, --output    Path to output. default: ./README.md 

`, {
    alias: {
        t: 'template',
        o: 'output'
    }
});

if (fs.existsSync(path.resolve('README.md'))) {
    console.log(logSymbols.error, 'README.md already exists');
} else {
    pkg2readme(cli.flags).then(()=> {
        console.log(symbol.success, 'successfully generated README.md');
    }).catch(error => {
        console.error(error.message, error.stack);
        process.exit(1);
    });
}
