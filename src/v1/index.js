const v1 = module.exports = {};

v1.add = (numbers) => {
  if (!numbers) {
    return 0;
  }

  const numbersArray = numbers.split(',').map(Number);

  if (numbersArray.length > 2) {
    throw new Error('Parameter numbers can only contain 2 numbers');
  }

  return numbersArray.reduce((total, number) => {
    return total + number;
  }, 0);
}