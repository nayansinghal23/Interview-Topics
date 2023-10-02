const obj = {
  name: "Nayan",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.rollNo;
  },
};

// I want to use properties of obj in obj2
const obj2 = {
  rollNo: 1,
  name: "Lagan",
  __proto__: obj,
};

console.log(obj2);
console.log(obj2.getName()); // It will first look for name property in itself and then will go to the prototype
console.log(obj2.getRoll());

const obj3 = {
  class: "B. Tech",
  __proto__: obj2,
};

console.log(obj3.getRoll(), obj3.getName());

// creating our own prototypal function
Array.prototype.show = function () {
  return this;
};

const cities = ["Delhi"];
console.log(cities.show());
