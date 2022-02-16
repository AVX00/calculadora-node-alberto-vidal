require("dotenv").config();
const debug = require("debug")("calc:");
const { program } = require("commander");
const { add } = require("./add");

program.requiredOption("-n, --numbers <number...>");
program.parse(process.argv);

const numbers = program
  .opts()
  .numbers.flatMap((input, index) => (index <= 1 ? Number(input) : []));

debug(add(numbers));
