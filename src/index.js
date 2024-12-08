#!/usr/bin/env node

import fs from 'fs';
import * as path from 'node:path';
import process from "node:process";

export function pathToFile(filepath1, filepath2) {
    const first = path.resolve(process.cwd(), filepath1);
    const second = path.resolve(process.cwd(), filepath2);
    console.log(first, second);

    const fileFirst = JSON.parse(fs.readFileSync(first));
    const fileSecond = JSON.parse(fs.readFileSync(second));
    console.log(fileFirst,fileSecond);
}
