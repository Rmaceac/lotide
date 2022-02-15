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

const without = (source, itemsToRemove) => {
  const toRemove = new Set(itemsToRemove);
  const newArr = source.filter((item) => {
    if (!items.has(item)) {
      return item;
    }
  });
};

// TEST CASE 1:
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// without([1, 2, 3], [1, 2, 3]);
// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);