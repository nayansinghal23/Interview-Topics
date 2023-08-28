// Function along with its lexical scope is closure

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
//   a = 100;
// }
// let sum = (num1, num2) => {
//   console.log(num1 + num2);
//   x()();
// };
// sum(23, 67);

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// let sum = (num1, num2) => {
//   console.log(num1 + num2);
//   x()();
// };
// sum(23, 67);

/*
function z() {
  function x() {
    var a = 7;
    function y() {
      a = 100;
      console.log(a);
    }
    a = 23;
    console.log(a);
    return y;
  }
  return x;
}

let sum = (num1, num2) => {
  console.log(num1 + num2);
  z()()();
};
sum(23, 67);
*/

// Module Pattern
var Module = (function () {
  function privateMethod() {
    // do something
  }

  return {
    publicMethod: function () {
      // can call private method
    },
  };
})();
