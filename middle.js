const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
  } return true;
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ? console.log("🟢🟢🟢 Assertion Passed") : console.log("🛑🛑🛑 Assertion Failed");
};

