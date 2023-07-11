import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from "node:assert";
import tempfs from 'temp-fs';
import { pkg2readme } from '../src/index.js';
// use fileURLToPath(import.meta.url) for work on windows
const __dirname = path.dirname(fileURLToPath(import.meta.url));
describe("test", function () {
    let dir;
    beforeEach(function () {
        dir = tempfs.mkdirSync();
    });
    afterEach(function () {
        tempfs.clearSync();
    });
    it("should create README", function () {
        const outputPath = path.join(dir.path, "actual.README.md");
        const expectedOutput = fs.readFileSync(path.join(__dirname, "./fixture/README.md"), 'utf8');
        return pkg2readme({
            cwd: __dirname,
            output: outputPath,
            template: path.join(__dirname, "./fixture/README.ejs")
        }).then(() => {
            assert.strictEqual(fs.readFileSync(outputPath, 'utf8'), expectedOutput);
        });
    })
});
