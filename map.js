const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  } return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

// ------------------------------------------------------------

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
// const words = ["you", "call", "that", "a", "pushup"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

const array1 = [1, 5, 10, 15, 20, 25];
const array2 = [6, 10, 15, 20, 25, 30];
assertArraysEqual(array2, map(array1, num => num += 5));