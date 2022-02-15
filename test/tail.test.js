const tail = require('../tail');
const { assert } = require('chai');

describe("#tail function", () => {
  it("should return [2,3,4,5] when given [1,2,3,4,5]", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });

  it("should return ['the', 'tail', 'end'] when given ['head','the', 'tail', 'end']", () => {
    assert.deepEqual(tail(['head','the', 'tail', 'end']), ['the', 'tail', 'end']);
  });
});