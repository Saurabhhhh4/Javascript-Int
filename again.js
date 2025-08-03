// function deepCopy(obj) {
//   if (obj == null || typeof obj != "object") return obj;
//   let copy = Array.isArray(obj) ? [] : {};
//   for (let key in obj) {
//     copy[key] = deepCopy(obj[key]);
//   }
//   return copy;
// }

// let obj1 = { name: "Shivraj", age: 20, address: { city: "Delhi" } };
// let obj2 = deepCopy(obj1);

// console.log(obj1);           // Original
// console.log(obj2);           // Deep Copied
// console.log(obj1 == obj2);   // false

// function deepComparison(obj1, obj2) {
//   if (obj1 === obj2) return true;
//   if (typeof obj1 != "object" || typeof obj2 != "object" || obj1 == null || obj2 == null)
//     return false;

//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);
//   if (keys1.length != keys2.length) return false;

//   for (let key of keys1) {
//     if (!deepComparison(obj1[key], obj2[key])) return false;
//   }

//   return true;
// }

// let a = { name: "Shivraj", age: 20 };
// let b = { name: "Shivraj", age: 20 };

// console.log(deepComparison(a, b)); // true
// console.log(a == b);               // false

// function debounce(fn, wait) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//     }, wait);
//   };
// }

// const logger = (args) => {
//   console.log("Log Data :", args);
// };

// const debounceLogger = debounce(logger, 2000);

// debounceLogger(1);
// debounceLogger(2);
// debounceLogger(3);
// debounceLogger(4);
// debounceLogger(5);
// debounceLogger(6);
// debounceLogger(7);
// debounceLogger(8);

// function throttle(fn, delay) {
//   let throttled = false;
//   return function (...args) {
//     if (!throttled) {
//       fn.apply(this, args);
//       throttled = true;
//       setTimeout(() => {
//         throttled = false;
//       }, delay);
//     }
//   };
// }

// const logger = (args) => {
//   console.log("Log Data :", args);
// };

// const throttleLogger = throttle(logger, 1000);

// throttleLogger(1);
// throttleLogger(2);
// throttleLogger(3);
// throttleLogger(4);
// throttleLogger(5);

// setTimeout(() => {
//   throttleLogger(6);
//   throttleLogger(7);
// }, 1100);

// let str1 = "Hello";
// let str2 = "World";
// let result = str1 + str2;
// console.log(result);

// let result = 3 + 2 + "7";
// console.log(result);

const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);
