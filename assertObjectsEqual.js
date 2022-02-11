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
    }
    // comparing values of identical keys in different objects
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  eqObjects(object1, object2) ? console.log(`🟢🟢🟢 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`) : console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

const thing1 = {};
const thing2 = {};
const thing3 = {name: "ryan"};
assertObjectsEqual(thing1, thing2);