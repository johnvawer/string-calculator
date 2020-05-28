const v2 = module.exports = {};

v2.add = (numbers) => {
  if (!numbers) {
    return 0;
  }
  
  const numbersArray = numbers.split(',').map(Number);

  return numbersArray.reduce((total, number) => {
    return total + number;
  }, 0);
}