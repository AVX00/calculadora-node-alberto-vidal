const add = (numbers) => {
  return numbers.reduce((acumulator, number) => acumulator + number, 0);
};

const logAddition = (numbers) =>
  `The addition of ${numbers[0]} and ${numbers[1]} is ${add(numbers)}`;

const addUtils = { add, logAddition };

exports.addUtils = addUtils;
