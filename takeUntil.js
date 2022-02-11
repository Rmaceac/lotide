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

// ------------------------------------------------------------

const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      results.push(array[i]);
    }
    if (callback(array[i])) {
      return results;
    }
  }
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);