const debug = require("debug");
const chalk = require("chalk");

const errorMsg = debug("ERROR:");

const isValidInput = (numbers) => {
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
};

exports.isValidInput = isValidInput;
