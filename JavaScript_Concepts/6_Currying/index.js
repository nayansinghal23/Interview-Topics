// Currying using bind method

/*
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(6);

let multiplyBy3 = multiply.bind(this, 3);
multiplyBy3(6);
*/

// Currying using closures

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyBy2 = multiply(2)(6);
let multiplyBy3 = multiply(3)(6);
