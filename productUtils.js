const product = (numbers) =>
  numbers.reduce((acumulator, number) => acumulator * number, 1);

const logProduct = (numbers) =>
  `The product of ${numbers[1]} and ${numbers[0]} is ${product(numbers)}`;

exports.productUtils = { product, logProduct };
