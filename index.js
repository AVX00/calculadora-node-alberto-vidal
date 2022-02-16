require("dotenv").config();
const debug = require("debug");
const chalk = require("chalk");
const { program } = require("commander");
const { addUtils } = require("./addUtils");

const { substractUtils } = require("./subtractUtils");
const { productUtils } = require("./productUtils");
const { divisionUtils } = require("./divisionUtils");

const calc = debug("calc:");
const errorMsg = debug("ERROR:");

program.requiredOption("-n, --numbers <number...>");
program.parse(process.argv);

const numbers = program
  .opts()
  .numbers.flatMap((input, index) => (index <= 1 ? Number(input) : []));
if (numbers.length < 2) {
  errorMsg(chalk.red("provide 2 values"));
  process.exit();
}
numbers.forEach((number) => {
  if (Number.isNaN(number)) {
    errorMsg(chalk.red("some value is not a number... exiting"));
    process.exit();
  }
});

calc(addUtils.logAddition(numbers));
calc(substractUtils.logSubstract(numbers));
calc(productUtils.logProduct(numbers));
calc(divisionUtils.logDivision(numbers));
