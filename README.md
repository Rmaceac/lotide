# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rmaceac/lotide`

**Require it:**

`const _ = require('@rmaceac/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual: Compares two arrays using the eqArrays function and returns an assertion passed or failed.
assertEqual: Compares two values and returns an assertion passed or failed.
assertObjectsEqual: Compares two objects and returns an assertion passed or failed.
countLetters: Counts the occurances of different letters within a provided string and returns a count for each appearing letter.
countOnly: Takes an array of elements and an object listing which elements of the array to count. Returns a count of those elements.
eqArrays: Compares two arrays for strict equality.
eqObjects: Compares two objects for deep equality. The order the objects' keys are listed doesn't matter.
findKey: Search an object using a key name and return its key/value pair.
findKeyByValue: Search an object using a value and return the key associated with that value.
head: Receives and array and returns the first element of that array.
letterPositions: Accepts a string and returns a list of the indexes where each letter within the string appears.
map: Similar to Array.map(), it takes an array and a callback function, allowing you to create a new array with elements manipulated by the callback function.
middle: Takes an array of numbers and returns the middle number in the array. If the array contains an even amount of numbers, the middle two numbers are returned. If the array has 2 or fewer numbers, an empty array is returned.
reverse: Reverses a string. Can accept arguments through the command line.
tail: Receives an array and returns all but the first element in that array.
takeUntil: Takes an array and callback function. Returns a new array of the same elements until a element (determined by the callback function) is found.
without: Accepts an array and an array of items to remove from the first array. Returns a new, altered array without the removed items.