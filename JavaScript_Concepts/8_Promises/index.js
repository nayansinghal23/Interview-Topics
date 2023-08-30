// Callback hell
/*
console.log("start");

function performSomething(name, cb) {
  setTimeout(() => {
    cb(`I am ${name}`);
  }, 1000);
}

function occupation(role, cb) {
  setTimeout(() => {
    cb(`I am a ${role}`);
  }, 2000);
}

function salary(amount, cb) {
  setTimeout(() => {
    cb(`I am earning ${amount} LPA`);
  }, 2000);
}

performSomething("Nayan", (name) => {
  console.log(name);
  occupation("Software Developer", (role) => {
    console.log(role);
    salary(25, (amount) => {
      console.log(amount);
    });
  });
});

console.log("end");
*/

// Promises
console.log("start");

function performSomething(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am ${name}`);
    }, 1000);
  });
}

function occupation(role) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am a ${role}`);
    }, 2000);
  });
}

function salary(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`I am earning ${amount} LPA`);
    }, 2000);
  });
}

// Promise Hell
/*
performSomething("Nayan Singhal")
  .then((res) => {
    console.log(res);
    occupation("SDE")
      .then((res) => {
        console.log(res);
        salary(25)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            throw new Error(err.message);
          });
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  })
  .catch((err) => {
    throw new Error(err.message);
  });
*/

// Promise Chaining
/*
performSomething("Nayan Singhal")
  .then((res) => {
    console.log(res);
    return occupation("SDE");
  })
  .then((res) => {
    console.log(res);
    return salary(25);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err.message);
  });
*/

// Promise Combinator - 1 -> If any of the promise fails, all of them will failed
/*
Promise.all([performSomething("Nayan Singhal"), occupation("SDE"), salary(25)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err.message);
  });
*/

// Promise Combinator - 2 -> returns the promise that will resolve or reject first
/*
Promise.race([performSomething("Nayan Singhal"), occupation("SDE"), salary(25)])
.then((res) => {
  console.log(res);
})
.catch((err) => {
  throw new Error(err.message);
});
*/

// Promise Combinator - 3 -> returns all the promise no matter whether they are fulfilled or failed
/*
Promise.allSettled([
  performSomething("Nayan Singhal"),
  occupation("SDE"),
  salary(25),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err.message);
  });
*/

// Promise Combinator - 4 -> returns only the first fulfilled promise and ignores the rejected ones. Gives error only if all promises failed
/*
Promise.any([performSomething("Nayan Singhal"), occupation("SDE"), salary(25)])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err.message);
  });
*/

// Async Await
const result = async () => {
  try {
    const message1 = await performSomething("Nayan Singhal");
    console.log(message1);
    const message2 = await occupation("SDE");
    console.log(message2);
    const message3 = await salary(25);
    console.log(message3);
  } catch (err) {
    throw new Error(err.message);
  }
};
result();
console.log("end");
