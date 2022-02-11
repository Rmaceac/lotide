const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const array1 = [1, 2];
const array2 = [1, 2];
const array3 = [1, 2, 3];

assertArraysEqual(array1, array3);