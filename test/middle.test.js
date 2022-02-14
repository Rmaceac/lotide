const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 5, 18, 4, 10]), [5, 18]); // Pass!
assertArraysEqual(middle([1, 2]), []); // Pass!
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass!