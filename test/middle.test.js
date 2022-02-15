const { assert } = require('chai');
const middle = require('../middle');

describe("should return the element in the middle (1 or 2) of a given array", () => {
  it('should return [3] when given [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return an empty array when given an array with 2 or fewer elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return the two middle element if given an array with an equal number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});