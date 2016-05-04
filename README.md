# pkg-to-readme

Generate README.md using package.json from command line.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm install pkg-to-readme -g
```

## Usage

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