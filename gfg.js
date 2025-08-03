// console.log(null ?? "default");
// console.log(undefined ?? "default");
// console.log(false ?? "default");
/////////////////////////////////////////////////
// let petName = "Rocky"; // Global Variable
// myFunction();

// function myFunction() {
//   console.log("Inside myFunction - Type of petName:", typeof petName);
//   console.log("Inside myFunction - petName:", petName);
// }

// console.log("Outside myFunction - Type of petName:", typeof petName);
// console.log("Outside myFunction - petName:", petName);
///////////////////////////
// let x = 0;
// console.log(x++);
// console.log(++x);
////////////////////////////////////
// let x;
// console.log(x); // undefined

// function foo(a) {
//   console.log(a); // undefined if no argument is passed
// }
// foo();

/////////////////

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b, a === b);
// Explanation: Arrays are objects and compared by reference. a and b are distinct objects, so both loose (==) and strict (===) comparisons yield false.

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), i * 100);
// }
//  What is a higher-order function in JavaScript?
// A higher-order function in JavaScript is a function that either takes one or more functions as arguments, or returns a function as its result. These functions allow for more abstract and reusable code, enabling functional programming patterns

// For example, map() and filter() are higher-order functions because they take callback functions as arguments.

// What is the difference between ViewState and SessionState?
// ViewState: It is specific to a single page in a session.
// SessionState: It is user specific that can access all the data on the web pages.

// const obj = {
//   name: "JavaScript",
//   greet: function () {
//     console.log(this.name);
//   },
// };
// obj.greet(); // "JavaScript"

// What is the use of void(0) ?
// The void(0) is used to call another method without refreshing the page during the calling time parameter “zero” will be passed.
// let a = [1, 2, 3];
// let b = a;
// b[0] = 100;
// console.log(a);
////////////
// function arrayFromValue(item) {
//   return;
//   [item];
// }
/////////////////////
// console.log(arrayFromValue(10)); // ???
////////////////
// let arr = new Array(3).fill([]);
// arr[0].push(10);
// console.log(arr); // ???
/////////////
// const obj = { x: 1 };
// const { x, x: y } = obj;
// console.log(y); // ???
///////////////////////////////////

console.log(typeof undeclaredVar); // ???
console.log(typeof y); // ???
let y = 1;
