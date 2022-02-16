require("dotenv").config();
const debug = require("debug");
const prompt = require("prompt");
const { program } = require("commander");
const { addUtils } = require("./addUtils");
const { substractUtils } = require("./subtractUtils");
const { productUtils } = require("./productUtils");
const { divisionUtils } = require("./divisionUtils");
const { isValidInput } = require("./isValidInput");

const calc = debug("calc:");
prompt.start();

program.requiredOption("-n, --numbers <number...>");
program.parse(process.argv);

let numbers = program
  .opts()
  .numbers.flatMap((input, index) => (index <= 1 ? Number(input) : []));

const logResults = (numbers) => {
  calc(addUtils.logAddition(numbers));
  calc(substractUtils.logSubstract(numbers));
  calc(productUtils.logProduct(numbers));
  calc(divisionUtils.logDivision(numbers));
};

(async () => {
  if (!isValidInput(numbers)) {
    do {
      numbers = Object.values(
        await prompt.get(["firstNumber", "secondNumber"])
      );
    } while (!isValidInput(numbers));
  }
  logResults(numbers);
})();
