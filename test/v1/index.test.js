const expect = require('chai').expect;
const v1Add = require('../../src/v1');

describe('Add function V1', function () {
  it('should return a number based on the string passed in', function () {
    const numberString = "1,5";
    const result = v1Add.add(numberString);

    expect(result).to.equal(6);
  })

  it('should return correct sum if only one number passed in', function () {
    const numberString = "1";
    const result = v1Add.add(numberString);

    expect(result).to.equal(1);
  })

  it('should only allow a string containing a maximum of two numbers', function () {
    const numberString = "1,2,5,6";
    expect(function () {
      v1Add.add(numberString)
    }).to.throw('Parameter numbers can only contain 2 numbers');
  })

  it ('Should return 0 when an empty string it passed', function () {
    const numberString = "";
    const result = v1Add.add(numberString);

    expect(result).to.equal(0);
  })
})