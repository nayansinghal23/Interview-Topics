// Each and every function in JS has access to this keyword. For arrow functions this keyword works differently

// In order to print full name of myName object, I need to add printFullName property to this object, which is not an efficient way. Hence we use call method that allows us to do function borrowing

let myName = {
  firstName: "Nayan",
  lastName: "Singhal",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

printFullName.call(myName, "Meerut", "UP");

// Only difference b/w call and apply is how we pass arguments. I call method we pass arguments individually. In apply method we pass them in arraylist
printFullName.apply(myName, ["Meerut", "UP"]);

// Bind - It returns the reference to the function
let printName = printFullName.bind(myName, "Meerut", "UP");
console.log(printName);
