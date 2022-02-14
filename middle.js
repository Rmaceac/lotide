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

module.exports = middle;