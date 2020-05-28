const expect = require('chai').expect;
const v3Add = require('../../src/v3');

describe('Add function V3', function () {
  //New tests for V3
  it('should use a delimiter passed as part of the string', function () {
    const numberString = "//;\n1;5;7;20";
    const result = v3Add.add(numberString);

    expect(result).to.equal(33);
  })

  it('should throw an error if an optional delimiter is passed by not used in the string', function () {
    const numberString = "//:\n5,7,11,15";

    expect(function () {
      v3Add.add(numberString)
    }).to.throw('Invalid delimeter used to seperate numbers');
  })

  // Tests carried over from the previous version. These should still pass in the new implementation
  it('should return a number based on the string passed in', function () {
    const numberString = "1,5";
    const result = v3Add.add(numberString);

    expect(result).to.equal(6);
  })

  it('should return correct sum if only one number passed in', function () {
    const numberString = "1";
    const result = v3Add.add(numberString);

    expect(result).to.equal(1);
  })

  it ('Should return 0 when an empty string it passed', function () {
    const numberString = "";
    const result = v3Add.add(numberString);

    expect(result).to.equal(0);
  })

  it('should handle an unknown amount of numbers being passed in a return a correct result', function () {
    const numberString = "1,6,75,102,5,9,20";
    const result = v3Add.add(numberString);

    expect(result).to.equal(218);
  })
})