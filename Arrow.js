// function person() {
//   this.name = "saurabh";
//   setTimeout(function () {
//     // console.log(`hi  ${this.name}`);
//   }, 1000);
// }
// person();

// function person1() {
//   this.name = "saurabh";
//   setTimeout(() => {
//     // console.log("hi " + this.name);
//   }, 1000);
// }
// person1();

// const nums = [1, 2, 3, 4];
// const double = nums.map((n) => n * 2);
// // console.log(double);

// const events = nums.filter((nums) => nums % 2 === 0);
// // console.log(events);

// const sum = nums.reduce((total, sum) => total + nums, 0);
// // console.log(sum);

// setTimeout(() => {
//   // console.log("Done!!");
// }, 100);

// document.getElementById("outerDiv").addEventListener("click", function () {
//   console.log("Outer div clicked");
// });

// document.getElementById("innerBtn").addEventListener("click", function () {
//   console.log("Button clicked");
// });

//To avoid event bubling
// document.getElementById("btn").addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("clicked");
// });

//AJAX

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.example.com/data", true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response); // Update DOM here
//   }
// };

// xhr.send();
// const animal = {
//   eats: true,
//   walk() {
//     console.log("Animal walks");
//   },
// };

// const dog = {
//   bark() {
//     console.log("Dog barks");
//   },
// };

// Inherit from animal
// dog.__proto__ = animal;

// console.log(dog.eats); // true (inherited)
// dog.walk(); // "Animal walks" (inherited)
// dog.bark(); // "Dog barks" (own method)

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hi, I am ${this.name}`);
// };

// const p1 = new Person("sauyrabh");
// p1.sayHi();

// function show() {
//   console.log(this);
// }
// show(); // In browser: window

// const user = {
//   name: "saurabh",
//   greet: () => {
//     console.log(this.name);
//   },
// };
// user.greet();

// function Car(name) {
//   this.name = name;

//   const myCar = new Car("Innova");
//   console.log(myCar.name);
// }

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Raj", sayBye);

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched from server");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing the data...");
}

fetchData(processData);

// Output after 2 seconds:
// Data fetched from server
// Processing the data...

step1(function () {
  step2(function () {
    step3(function () {
      // and so on...
    });
  });
});

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Raj", sayBye);

// Output:
// Hello Raj
// Goodbye!

const a = [];
if (a) {
  console.log("Array is truthy");
}
if (a == false) {
  console.log("Array equals false?");
}
