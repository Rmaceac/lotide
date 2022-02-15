const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } 
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;
};

const eqObjects = function(object1, object2) {
  // Arrays made up of each object's keys and values
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  // objects are not the same if they have a different number of keys
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const key of obj1Keys) {
    // check if the compared keys are arrays. If so, compare them.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    };
    // comparing values of identical keys in different objects
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// TEST CODE:
const firstTestObj = { a: "hello", b: "goodbye", };
const secondTestObj = { b: "goodbye", a: "hello" };
const thirdTestObj = { a: "aloha", b: "adios", c: "que tal"};
// Test for objects with array key:values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);