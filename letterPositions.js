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

const letterPositions = function(sentence) {
  const results = {};
  // uncomment line 16 and change "sentence" to "thing" on lines 17-19, 21 to remove all whitespace
  // const thing = sentence.split(" ").join("")
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
  }
  return results;
};

// letterPositions("hello there stranger");
assertArraysEqual(letterPositions("hello there stranger").l, [2, 3]);