require("dotenv").config();
const debug = require("debug");
const { program } = require("commander");
const { addUtils } = require("./addUtils");

const { substractUtils } = require("./subtractUtils");
const { productUtils } = require("./productUtils");
const { divisionUtils } = require("./divisionUtils");
const { isValidInput } = require("./isValidInput");

const calc = debug("calc:");

program.requiredOption("-n, --numbers <number...>");
program.parse(process.argv);

const numbers = program
  .opts()
  .numbers.flatMap((input, index) => (index <= 1 ? Number(input) : []));

isValidInput(numbers);

calc(addUtils.logAddition(numbers));
calc(substractUtils.logSubstract(numbers));
calc(productUtils.logProduct(numbers));
calc(divisionUtils.logDivision(numbers));
