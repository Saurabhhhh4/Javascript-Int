// =========================================================================================================

// // **** deep clone of object ****
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

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 == obj2);

// let object1 = [
//   1,
//   2,
//   [1, 23, [233, 11], 6, 3],
//   { name: "Shivraj", age: 20, address: { city: "Delhi" } },
// ];
// let object2 = deepCopy(object1);

// console.log(object1);
// console.log(object2);
// console.log(object1 == object2);

// =========================================================================================================

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

// let obj1 = { name: "Shivraj", age: 20 };
// let obj2 = { name: "Shivraj", age: 20 };

// console.log(deepComparison(obj1, obj2));
// console.log(obj1 == obj2);

// =========================================================================================================

// ****  debounce implementation ****
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
// debounceLogger(5);
// debounceLogger(6);
// debounceLogger(7);
// debounceLogger(8);

// =========================================================================================================

// // ****  throttle implementation ****
// function throttle(fn, delay) {
//   let(...args) {
//     if (!throttle throttled;
//   return function d) {
//       fn.apply(this, args);

//       throttled = true;
//       setTimeout(() => {
//         throttled = false;
//       }, delay);
//     }
//   };
// }

// const logger = (args) => {
//   console.log(`Log Data : `, args);
// };

// // const throttleLogger = throttle(logger, 2000);
// const throttleLogger = throttle(logger, 1000);

// throttleLogger(1);
// throttleLogger(2);
// throttleLogger(3);
// throttleLogger(4);
// throttleLogger(5);
// // for (let i = 0; i < 10 ** 10; i++) {}
// throttleLogger(6);
// throttleLogger(7);
// throttleLogger(8);

// setTimeout(() => {
//   throttleLogger(9);
//   throttleLogger(10);
// }, 1100); // Delay should be slightly greater than throttle delay

// =========================================================================================================
// // ****   flatten the array   ****

// function flattenArray(arr) {
//   return arr.reduce((acc, curr) => {
//     return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
//   }, []);
// }

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

// =========================================================================================================

// // ****  custom promiseAll implementation ****
// function promiseAll(promises) {
//   return new Promise(
//     let completed =(resolve, reject) => {
//     let results = []; 0;

//     if (promises.length === 0) {
//       return resolve([]); // Handle empty array case
//     }

//     promises.forEach((promise, index) => {
//       Promise.resolve(promise) // Ensure it works with non-promise values
//         .then((value) => {
//           results[index] = value;
//           completed++;

//           if (completed === promises.length) {
//             resolve(results); // Resolve when all promises are done
//           }
//         })
//         .catch(reject); // Reject immediately if any promise fails
//     });
//   });
// }

// // ****

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = new Promise((res) => setTimeout(() => res(30), 1000));

// promiseAll([p1, p2, p3]).then(console.log); // Output: [10, 20, 30] (after 1s)
// // ****
// // failure cases
// const p4 = Promise.resolve(100);
// const p5 = Promise.reject("Error occurred");
// const p6 = Promise.resolve(300);

// promiseAll([p4, p5, p6]).then(console.log).catch(console.error); // Output: "Error occurred"

// // ****
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));
// const promise3 = 42;

// promiseAll([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results); // [3, 'foo', 42]
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   });

// =========================================================================================================

// ****
// create a promise to wait for a second
// deep clone of object using function
