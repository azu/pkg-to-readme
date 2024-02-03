'use strict';
import { readPackageUp } from "read-package-up";
import path from "node:path";
import fs from "node:fs";
import ejs from "ejs";

// creat dateObject using Pure Date
const dateObject = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
}
const defaultOptions = {
    configPath: path.resolve(process.env.HOME || process.env.USERPROFILE, '.readme-genrc'),
    outputPath: path.resolve(process.cwd(), "README.md"),
    cwd: process.cwd()
};
export const pkg2readme = async (cliOptions = {}) => {
    const cwd = cliOptions.cwd ? cliOptions.cwd : defaultOptions.cwd;
    const result = await readPackageUp({ cwd: cwd })
    const packageJson = result.packageJson;
    const configPath = cliOptions.template ? path.resolve(cwd, cliOptions.template) : defaultOptions.configPath;
    const outputPath = cliOptions.output ? path.resolve(cwd, cliOptions.output) : defaultOptions.outputPath;
    if (configPath && !fs.existsSync(configPath)) {
        return Promise.reject(new Error("Not found template: " + configPath));
    }
    ejs.renderFile(configPath, {
        ...dateObject,
        ...packageJson
    }, (err, output) => {
        if (err) {
            console.log(err);
        }
        fs.writeFileSync(outputPath, output, "utf-8");
    });
};

