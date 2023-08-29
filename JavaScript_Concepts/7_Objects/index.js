// Dynamically adding properties to an object
const property = "degree",
  value = "B. Tech";

const user = {
  name: "Nayan Singhal",
  age: 20,
  salary: "25LPA",
  "my dream company": "Microsoft", // we can even add spaces between the property of an object
  [property]: value,
};

console.log(user["my dream company"]); // we can also access the properties like this as well

// deleting a property
delete user["salary"];

// Question-1
/*
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func);
*/
// Answer will be 5 becoz delete keyword is used to only delete properties from an object and not a local variable

// Looping through object
/*
for (key in user) {
  console.log(key, user[key]);
}
*/

// Question-2
/*
const a = {};
const b = { key: "b" };
const c = { key: "c" };
console.log(a);
a[b] = 123;
a[c] = 456;
console.log(a);
console.log(a[b]);
*/
// Answer - when we try to access an object inside an object eg a[b], a[c] it stores it as { [object Object]: value } and overrides the value each time we access it. So first time when we access a[b] it stores { [object Object]: 123 } and next time when I access a[c] it overrides the value and stores { [object Object]: 456 }

// Shallow Copy -> When one object holds refernce to other object
// Deep Copy -> When one object holds value of other object

// Object-3 -> How to clone an object
let obj = {
  fname: "Nayan",
  lName: "Singhal",
};
let obj2 = obj; // here obj2 is refereing to obj, hence its shallow copy
let clonnedObj = { ...obj }; // here due to object destructuring, we have made deep copy og obj
obj.lName = "Tewar";
console.log(obj2, clonnedObj);
