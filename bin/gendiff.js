#!/usr/bin/env node
import { Command } from "commander";
import { pathToFile } from "../src/index.js";

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.1.0')
    .option('-f, --format [type]', 'output format')
    .argument('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
        pathToFile(filepath1, filepath2);
    });
program.parse();