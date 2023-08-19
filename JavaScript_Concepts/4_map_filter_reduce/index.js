const arr = [5, 1, 3, 2, 6];

// reduce function is used when you have to iterate over an array and find a single output from it
// eg :- max or min element, sum of all element, etc
// reduce takes 2 paramteres, accumulator and current

const output = arr.reduce((acc, curr) => {
  acc = Math.max(acc, curr);
  return acc;
}, 0);
// This 0 passed is the initial value of accumulator

console.log(output);

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 20 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Nayan", lastName: "Singhal", age: 20 },
];

let freq = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(freq);
