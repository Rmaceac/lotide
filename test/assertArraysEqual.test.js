const assertArraysEqual = require('../assertArraysEqual.js');
const eqArrays = require('../eqArrays');

assertArraysEqual(["compare", "this", "array"], ["compare", "this", "array"]); // true
assertArraysEqual([5,4,3,2,1], [5,4,3,2,1]); // true
assertArraysEqual(["element", 16, false, 0.715], ["element", 16, false, 0.715]); // true