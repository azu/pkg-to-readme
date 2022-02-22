import fs from 'fs';
import path from 'path';
import readmeGen from '../src/index.js';
import tempfs from 'temp-fs';
import assert from "assert";

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
        return readmeGen({
            cwd: __dirname,
            output: outputPath,
            template: path.join(__dirname, "./fixture/README.ejs")
        }).then(() => {
            assert.equal(fs.readFileSync(outputPath, 'utf8'), expectedOutput);
        });
    })
});
