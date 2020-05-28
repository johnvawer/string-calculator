const expect = require('chai').expect;
const v2Add = require('../../src/v2');

describe('Add function V2', function () {
  //New tests for V2
  it('should handle an unknown amount of numbers being passed in a return a correct result', function () {
    const numberString = "1,6,75,102,5,9,20";
    const result = v2Add.add(numberString);

    expect(result).to.equal(218);
  })

  // Tests carried over from the previous version. Removed test to explicity test
  // for 2 numbers being passed in as this is no longer required
  it('should return a number based on the string passed in', function () {
    const numberString = "1,5";
    const result = v2Add.add(numberString);

    expect(result).to.equal(6);
  })

  it('should return correct sum if only one number passed in', function () {
    const numberString = "1";
    const result = v2Add.add(numberString);

    expect(result).to.equal(1);
  })

  it ('Should return 0 when an empty string it passed', function () {
    const numberString = "";
    const result = v2Add.add(numberString);

    expect(result).to.equal(0);
  })
})