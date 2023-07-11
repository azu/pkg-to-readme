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
-f, --force     Force update

```

Example:

```
$ pkg-to-readme --template path/to/template.md --output path/to/README.md
```

### from Node.js

```js
import { pkg2readme } from "pkg-to-readme";
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
$ npm test
```

## License

MIT © azu

## Thanks

Base on [akameco/readme-gen: README generator for node.js.](https://github.com/akameco/readme-gen "akameco/readme-gen: README generator for node.js.")

@[akameco](https://github.com/akameco "akameco")
