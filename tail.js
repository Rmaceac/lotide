const assertEqual = require('./assertEqual');

const tail = (array) => {
  return (array.slice(1));
};

module.exports = tail;