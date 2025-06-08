//

// shallow copy

// let ghar1 = {
//   malik: "Saurabbh",
//   umar: 26,
//   address: {
//     sheher: "Bangalore",
//   },
// };

// let ghar2 = { ...ghar1 };

// ghar2.address.sheher = "Mumbai";
// console.log(ghar1.address.sheher); // Output: "Mumbai" 😱
// console.log(ghar2.address.sheher); // Output: "Mumbai" 😱

//deep copy

// function deepcopy(obj) {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   let copy = Array.isArray ? [] : {};

//   for (let key in obj) {
//     copy[key] = deepcopy(obj[key]);
//   }
//   return copy;
// }
// let ghar2 = deepcopy(ghar1);

// ghar2.address.sheher = "delhi";

// console.log(ghar1);
// console.log(ghar2);

// function deepcopy(obj) {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   let copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepcopy(obj[key]);
//   }
//   return copy;
// }
// let obj1 = { name: "saurabh", age: 20, address: { city: "bangalore" } };
// let obj2 = deepcopy(obj1);

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 == obj2);

// =========================================================

// ****  deep comparison implementation ****

// function deepComparison(obj1, obj2) {
//   if (obj1 == obj2) return true;

//   if (
//     typeof obj1 != "object" ||
//     typeof obj2 != "object" ||
//     obj1 == null ||
//     obj2 == null
//   )
//     return false;

//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length != keys2.length) return false;

//   for (let key in keys1) {
//     if (deepComparison(obj1[key], obj2[key]) == false) return false;
//   }

//   return true;
// }

// let obj1 = { name: "Saurabh", age: 20 };
// let obj2 = { name: "Saurabh", age: 20 };

// console.log(deepComparison(obj1, obj2));
// console.log(obj1 == obj2);

// function deepComparison(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   if (
//     typeof obj1 !== "object" ||
//     typeof obj2 !== "object" ||
//     obj1 === null ||
//     obj2 === null
//   ) {
//     return false;
//   }
//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (let key of keys1) {
//     if (!deepComparison(obj1[key], obj2[key])) return false;
//   }
//   return true;
// }
// let x = { name: "Ram", address: { city: "Ayodhya" } };
// let y = { name: "Ram", address: { city: "Ayodhya" } };

// console.log(deepComparison(x, y));
// console.log(x == y);

// let dosti1 = { naam: "Rahul", umar: 25, city: "Delhi" };
// let dosti2 = { naam: "Rahul", umar: 25, city: "delhi" };

// console.log(deepComparison(dosti1, dosti2));
// console.log(dosti1 == dosti2);

// let obj1 = {
//   name: "Shivraj",
//   age: 20,
//   address: {
//     city: "Bangalore",
//     pin: 560001,
//   },
// };

// let obj2 = {
//   name: "Shivraj",
//   age: 20,
//   address: {
//     city: "Bangalore",
//     pin: 560001,
//   },
// };

// console.log(deepComparison(obj1, obj2));

// ==========================================================

// function debounce(fn, wait) {
//   let timer;
//   return function (...arguments) {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, wait);
//   };
// }

// const logger = (args) => {
//   console.log(`Log Data : `, args);
// };

// const debounceLogger = debounce(logger, 2000);

// debounceLogger(1);
// debounceLogger(2);
// debounceLogger(3);
// debounceLogger(4);

// ========================================================================

// function debounce(fn, wait) {
//   let timer;
//   return function (...arguments) {
//     if (timer) clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this, arguments);
//     }, wait);
//   };
// }

// const logger = (args) => {
//   console.log("log", args);
// };

// const debounceLogger = debounce(logger, 2000);

// debounceLogger(7);
// debounceLogger(8);

// ===========================================================================================================
//throttle example

// function throttle(fn, limit) {
//   let inThrottle;

//   return function (...args) {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => {
//         inThrottle = false;
//       }, limit);
//     }
//   };
// }

// const logger = (msg) => {
//   console.log("runnnn", msg);
// };

// const throttleLogger = throttle(logger, 2000);

// const interval = setInterval(() => {
//   throttleLogger("helloooo");
// }, 200);

// setTimeout(() => {
//   clearInterval(interval);
//   console.log("stop");
// }, 10000);

// function flattenArray(arr) {
//   return arr.reduce((acc, curr) => {
//     return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
//   }, []);
// }

///Flatten the array

// let arr1 = [1, 2, [3, 4], [5, [6, 7]], 8];
// console.log(flattenArray(arr1));

// function flattenArray(arr) {
//   // recursive function
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// let arr = [1, 2, [3, 4], [5, [6, 7]], 8];
// console.log(flattenArray(arr));

///////prac
// function flattenArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let arr = [1, 2, [3, 4], [5, [6, 7]], 8];
// console.log(flattenArray(arr));

// ======================

function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  // Method on the prototype
  return `Hello, my name is ${this.name}`;
};
const alice = new Person("Alice");
console.log(alice.greet()); // Output: "Hello, my name is Alice" (alice inherits greet from Person.prototype)
