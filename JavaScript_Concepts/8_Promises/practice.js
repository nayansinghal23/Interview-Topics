// Question-1 -> JS Engine will look for all the syncronous code in promise and will execute it. Even if i remove promise1.then() function still it will print 1 and 3 in console
/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});
promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

// Question-2
/*
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (err) {
    console.log(err);
    return "Error Caught";
  })
  .then(function (data) {
    console.log(data);
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success: ", data.message);
  })
  .catch(function (data) {
    console.log("Error: ", data.message);
  });
*/
