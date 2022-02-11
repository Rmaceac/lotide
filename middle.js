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

const middle = (array) => {
  let midNum = [];
  const midOfArray = array.length / 2;
  // if array has one or two elements, there is no middle, so return an empty array.
  if (array.length <= 2) {
    return midNum;
  }
  // ternary operator determines what elements are pushed to midNum based on whether the array length is odd or even. Odd pushes 1 element, even pushes the 2 middle elements.
  array.length % 2 !== 0 ? midNum.push(array[Math.floor(midOfArray)]) : midNum.push(array[midOfArray - 1], array[midOfArray]);
  return midNum;
};

assertArraysEqual(middle([1, 2, 5, 18, 4, 10]), [5, 18]); // Pass!
assertArraysEqual(middle([1, 2]), []); // Pass!
assertArraysEqual(middle([1, 2, 3]), [2]); // Pass!

