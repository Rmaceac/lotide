const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([11,2,3,4,5,6,7]), 11);
assertEqual(head(["the", "first", "string", "should", "return"]), "the");