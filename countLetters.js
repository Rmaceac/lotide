const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const letterCount = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  } return (letterCount);
};

// declare empty object to return at end of function
// loop through string argument with a for...of loop
// find the index of the letters of the string (in the loop (string[i])
// add letters via index to object as a key
// letter++ every time there is an additional occurance
// try wrapping "letter" in quotation marks to see what happens


countLetters("ryan maceachern you are number one");