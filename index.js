require("dotenv").config();
const debug = require("debug")("calc:");
const { program } = require("commander");

program.requiredOption("-n, --numbers <number...>");
program.parse(process.argv);
const options = program.opts();
debug(options.numbers);
