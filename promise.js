// const myPromise = new Promise((resolve, reject) => {
//   let x = 0;

//   setTimeout(() => {
//     if (x == 0) {
//       resolve("success");
//     } else {
//       reject("failure");
//     }
//   }, 1000);
// });

// const callbackSucess = (result) => {
//   console.log(result);
// };
// const callbackFailure = (error) => {
//   console.log(error);
// };
// myPromise.then(callbackSucess).catch(callbackFailure);

// Ek Promise banaya gaya hai, jo 1 second baad x ki value check karta hai.

// Agar x === 0 hota, toh resolve hota — matlab success.

// Agar x !== 0 (yaha pe 1 hai), toh reject hota — matlab failure.

// .then() hota hai jab success ho, .catch() hota hai jab failure ho.

// =======================================

// new Promise((resolve) => resolve(10))
//   .then((num) => num * 2)
//   .then((num) => num * 3)
//   .then((num) => console.log(num))
//   .catch((error) => console.log(error));

//  Explanation:
// Pehle promise 10 return karta hai.

// Pehla .then() us number ko 2 se multiply karta hai: 10 * 2 = 20

// Dusra .then() usko 3 se multiply karta hai: 20 * 3 = 60

// Teesra .then() result ko print karta hai:

//output
// 60
// =========================================

// const myPromise = new Promise((resolve) => resolve(10));

// async function fetchData() {
//   try {
//     let result = await myPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();

// Explanation:
// async function use ki gayi hai.

// await myPromise ka matlab: "Ruko jab tak promise complete na ho jaaye".

// resolve(10) hone ke baad result aata hai, aur console.log(result) karta hai.

// Output:

// 10

// ===============================================

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "succes1");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "succes2");
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 300, "error");
// });

// .............................................
///Promise.all waits for all to succeed.

// But promise3 rejects, so .catch() will run.

// 🟢 Output:

// Promise.all([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// .............................................

// What happens:
// Promise.any returns first resolved promise.

// promise1 resolves first in 100ms → "foo1"

// Promise.any([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ....................................
// 🔍 What happens:
// Yeh sabka result deta hai — chahe success ho ya fail.

// const myPromiseAllsettled = Promise.allSettled([promise1, promise2, promise3]);

// myPromiseAllsettled.then((values) => {
//   console.log(values);
// });

// Output:

// [
//   { status: "fulfilled", value: "foo1" },
//   { status: "fulfilled", value: "foo2" },
//   { status: "rejected", reason: "errorfoo3" }
// ]

///////////////////////////////////////////////////////

// Promise.race sirf sabse pehle complete hone wale promise ko return karta hai.

// promise1 completes first in 100ms with "foo1"

// const myPromiseRace = Promise.race([promise1, promise2, promise3]);

// myPromiseRace
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//output
//success1

// const myPromiseAll = Promise.all([promise1, promise2, promise3]);

// Same logic: one fail → .catch() chalega.

// promise3 fails → output hoga:

//////////////////////////////////////////////////////////////////

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout callback");
// }, 0);

// Promise.resolve()
//   .then(() => console.log("Promise 1 resolved"))
//   .then(() => console.log("Promise 2 resolved"));

// console.log("End");

// Output:
// Start
// End
// Promise 1 resolved
// Promise 2 resolved
// Timeout callback

///////////////////////////////////

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// // Output:
// // A
// // D
// // C
// // B

//////////////////////////////////////////////////////

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//     return Promise.resolve("Promise 2");
//   })
//   .then(console.log);

// console.log("End");

//////////////////////////////////////////////////////////////

// Promise.resolve().then(function task() {
//   console.log("Microtask");
//   Promise.resolve().then(task);
// });
// console.log("End");

// // Output:
// // End
// // Microtask run infinitely

// ****************************

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
//   setTimeout(() => console.log("Timeout inside Promise"), 0);
// });

// console.log("End");

// End
// Promise 1
// Timeout
// Timeout inside Promise

//////////////////////////////////8888

// setTimeout(() => console.log("A"), 0);

// Promise.resolve().then(() => console.log("B"));

// queueMicrotask(() => console.log("C"));

// console.log("D");

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => console.log("Promise 1"));

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 2");
//     return Promise.resolve();
//   })
//   .then(() => console.log("Promise 3"));

// console.log("End");
//8888888////////////////////////////////////////////////////////

// async function foo() {
//   console.log("Start");

//   await Promise.resolve();

//   console.log("Middle");

//   setTimeout(() => console.log("Timeout"), 0);
// }

// foo();

// console.log("End");

///////////////////////////////////////////////////////

// process.on("unhandledRejection", (reason, promise) => {
//   console.error("Unhandled Rejection at:", promise, "reason:", reason);
// });

// let timeoutId;

// function run() {
//   console.log("Executing...");
//   timeoutId = setTimeout(run, 1000);
// }

// timeoutId = setTimeout(run, 1000);

// const intervalId = setInterval(() => {
//   console.log("stop");
//   clearInterval(intervalId); // stops the "stop" log
//   clearTimeout(timeoutId); // stops the recursive timeout
// }, 2000);

// response.sort((a, b) => {
//   const dateA = new Date(a.date).getTime();
//   const dateB = new Date(b.date).getTime();

//   if (dateA === dateB) {
//     // agar date same ho toh location compare kar lein
//     return a.location.localeCompare(b.location);
//   } else {
//     // warna date ke hisaab se sort kar lein
//     return dateA - dateB;
//   }
// });

// function fetchProduct() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let available = true;
//       if (available) {
//         resolve("Product fetched successfully");
//       } else {
//         reject("Product not available");
//       }
//     }, 2000);
//   });
// }

// fetchProduct()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const delay = (ms, value) =>
//   new Promise((resolve) => setTimeout(() => resolve(value), ms));

// const toughPromiseChain = async () => {
//   try {
//     // Start with a simple delay
//     const first = await delay(100, "First");
//     console.log(first);

//     // Nested promise chain with error handling
//     const second = await Promise.race([
//       delay(200, "Second"),
//       delay(150, "Too Fast").then((val) => {
//         throw new Error(`${val} Rejected`);
//       }),
//     ]).catch((err) => {
//       console.log("Caught:", err.message);
//       return delay(50, "Recovered");
//     });

//     console.log(second);

//     // Complex promise all with transformations
//     const [a, b, c] = await Promise.all([
//       delay(100, 10),
//       delay(200, 20).then((x) => x * 2),
//       delay(50, 30)
//         .then((x) => {
//           if (x > 25) throw new Error("Value too big");
//           return x;
//         })
//         .catch(() => 5),
//     ]);

//     console.log(`Results: ${a}, ${b}, ${c}`);

//     // Recursive promise
//     const recursive = async (count) => {
//       if (count <= 0) return "Done";
//       await delay(50);
//       return recursive(count - 1);
//     };

//     const final = await recursive(3);
//     console.log(final);

//     // Unhandled promise that we won't await
//     delay(1000).then(() => {
//       console.log("This might appear after everything else");
//     });

//     return "All completed";
//   } catch (error) {
//     console.error("Major error:", error);
//     throw error;
//   }
// };

// // Execute the tough promise chain
// toughPromiseChain()
//   .then(console.log)
//   .catch(() => console.log("External catch"));

// console.log("This will appear first - async demonstration");

// Promise.resolve().then(() => {
//   console.log("microtask 1");

//   Promise.resolve().then(() => {
//     console.log("microtask 2");
//   });
// });

// console.log("End");

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("D");
// });

// console.log("E");

// Promise.resolve().then(function () {
//   console.log("hell");
// });

// button.addEventListener("click", () => {
//   Promise.resolve().then(() => {
//     // Runs before any rendering or timeout
//     alert("Promise handler runs immediately after click code.");
//   });

//   setTimeout(() => {
//     alert("setTimeout is slower");
//   }, 0);
// });

// console.log(1); // Synchronous
// setTimeout(() => console.log(2), 0); // Macrotask
// Promise.resolve().then(() => console.log(3)); // Microtask
// console.log(4); // Synchronous
// // Expected Output: 1, 4, 3, 2 (demonstrates synchronous code first, then microtasks, then macrotasks)

// module.exports = mongoose.model('User', userSchema);
