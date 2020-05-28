const expect = require('chai').expect;
const v5Add = require('../../src/v5');

describe('Add function V5', function () {
  //New tests for V5
  it ('should not add any number that is over 1000 to the total', function () {
    const numberString = '1, 5, 9, 1001, 1000, 999';
    const result = v5Add.add(numberString);

    expect(result).to.equal(2014);
  })

  // Tests carried over from the previous version. These should still pass in the new implementation
  it ('should throw an error if a negative number is passed', function () {
    const numberString = '1,-41, 6';
    
    expect(function () {
      v5Add.add(numberString)
    }).to.throw('Negative numbers are not allowed these were included: -41');
  })

  it ('should return all negative numbers that are passed in as part of the error message', function () {
    const numberString = '1,-41, 6, -8, 12, -15';
    
    expect(function () {
      v5Add.add(numberString)
    }).to.throw('Negative numbers are not allowed these were included: -41,-8,-15');
  })

  it('should use a delimiter passed as part of the string', function () {
    const numberString = '//;\n1;5;7;20';
    const result = v5Add.add(numberString);

    expect(result).to.equal(33);
  })

  it('should throw an error if an optional delimiter is passed by not used in the string', function () {
    const numberString = '//:\n5,7,11,15';

    expect(function () {
      v5Add.add(numberString)
    }).to.throw('Invalid delimeter used to seperate numbers');
  })

  it('should return a number based on the string passed in', function () {
    const numberString = '1,5';
    const result = v5Add.add(numberString);

    expect(result).to.equal(6);
  })

  it('should return correct sum if only one number passed in', function () {
    const numberString = '1';
    const result = v5Add.add(numberString);

    expect(result).to.equal(1);
  })

  it ('Should return 0 when an empty string it passed', function () {
    const numberString = '';
    const result = v5Add.add(numberString);

    expect(result).to.equal(0);
  })

  it('should handle an unknown amount of numbers being passed in a return a correct result', function () {
    const numberString = '1,6,75,102,5,9,20';
    const result = v5Add.add(numberString);

    expect(result).to.equal(218);
  })
})