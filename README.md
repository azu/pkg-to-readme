# pkg-to-readme

Generate README.md using package.json from command line.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install pkg-to-readme -g
```

## Usage

### from Command line

```
$ pkg-to-readme
  
  Options
  -t, --template  Path to template file. default: ~/.readme-genrc
  -o, --output    Path to output. default: ./README.md 
```

Example:

```
$ pkg-to-readme --template path/to/template.md --output path/to/README.md
```

### from Node.js

```js
const pkg2readme = require('pkg-to-readme');
readmeGen({
    cwd: __dirname,
    output: outputPath,
    template: path.join(__dirname, "./fixture/README.ejs")
}).then(() => {
    // ok
});
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## License

Copyright © 2016 azu
Licensed under the MIT license.

## Thanks

Base on [akameco/readme-gen: README generator for node.js.](https://github.com/akameco/readme-gen "akameco/readme-gen: README generator for node.js.")

@[akameco](https://github.com/akameco "akameco")