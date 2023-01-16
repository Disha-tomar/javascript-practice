let People = function (person, age) {
  this.person = person;
  this.age = age;
  this.info = function () {
    // logs People
    console.log(this);

    setTimeout(() => {
      // here this!=People
      console.log(this.person + " is " + this.age + " years old");
    }, 3000);
  };
};
let person1 = new People("John", 21);

// logs : undefined is undefined years old after 3 seconds
person1.info();

// promises in javascript
var promise = new Promise(function (resolve, reject) {
  const x = "disha";
  const y = "dish";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

// consuming of promises
// then() method takes two functions as parameters. then() is invoked when a promise is either resolved or rejected

promise
  .then(function () {
    console.log("success");
  })
  .catch(function () {
    console.log("fail");
  });

// example2
var promise1 = new Promise(function (resolve, reject) {
  // resolve("Geeks For Geeks");
  throw new Error("some error");
});

promise1.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

// catch is invoked when either a promise is rejected or some error has occurred in execution.used as an error handler

// closures
// A closure is the combination of a function and the lexical environment within which that function was declared.
// Any fx always has access to the variable environment of the execution context in which the fx was created
// the closure is then the VE attached to the fx exactly as it was at the time and place that the fx was created
// a closure is the closed-over variable environment of the execution context in which a fx was created, even after that execution context is gone

function init() {
  const name = "sahil";
  function displayName() {
    console.log(name);
  }

  displayName();
}

init();

function randFunc() {
  const name = "mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let sampleFunc = randFunc();
sampleFunc();

console.dir(sampleFunc);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

// js engine : program that executes javascript code: v8 -> nodejs

function calcAge(age) {
  console.log(sample);
}

calcAge("21");

var sample = "text";
