'use strict';
const ejs = require('ejs');
const moment = require('moment');
const path = require('path');
const fs = require('fs');
const readPkgUp = require('read-pkg-up');
const ObjectAssign = require("object.assign");
const dateObject = {
    year: moment().year(),
    month: moment().month(),
    day: moment().day()
};
const defaultOptions = {
    configPath: path.resolve(process.env.HOME || process.env.USERPROFILE, '.readme-genrc'),
    outputPath: path.resolve(process.cwd(), "README.md"),
    cwd: process.cwd()
};
module.exports = (cliOptions = {}) => {
    const cwd = cliOptions.cwd ? cliOptions.cwd : defaultOptions.cwd;
    return readPkgUp({cwd: cwd}).then(result => {
        const configPath = cliOptions.template ? path.resolve(cwd, cliOptions.template) : defaultOptions.configPath;
        const outputPath = cliOptions.output ? path.resolve(cwd, cliOptions.output) : defaultOptions.outputPath;
        if (configPath && !fs.existsSync(configPath)) {
            return Promise.reject(new Error("Not found template: " + configPath));
        }
        ejs.renderFile(configPath, ObjectAssign({}, dateObject, result.pkg), (err, output) => {
            if (err) {
                console.log(err);
            }
            fs.writeFileSync(outputPath, output, "utf-8");
        });
    });
};

