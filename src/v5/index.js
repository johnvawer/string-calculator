const v5 = module.exports = {};

const regexp = /\/\/(.*?)\n/;

v5.add = (numbers) => {
  if (!numbers) {
    return 0;
  }

  // Calculate which delimiter to use
  const optionalDelimiter = numbers.match(new RegExp(regexp));
  const delimiter = optionalDelimiter ? optionalDelimiter[1] : ',';
  
  // Get the numbers from the array and split them
  const numbersArray = numbers.split("\n").pop();
  const numbersToAdd = numbersArray.split(delimiter).map(Number);
  
  let negativeNumbers = [];

  const calculatedNumber =  numbersToAdd.reduce((total, number) => {
    // making the assumption here that the delimiter used to seperate numbers isn't valid
    if (isNaN(number)) throw new Error('Invalid delimeter used to seperate numbers');

    if(Math.sign(number) === -1) {
      negativeNumbers.push(number);
      return total;
    }

    if (number > 1000) return total;

    return total + number;
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers are not allowed these were included: ${negativeNumbers.join(',')}`);
  }

  return calculatedNumber;
}