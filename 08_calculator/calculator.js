const add = function(x, y) {
  return x + y;
	
};

const subtract = function(x, y) {
  return x - y;
	
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(base, exponent) {
  if (base === 0) {return 1;}
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= base;
  }
	return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
