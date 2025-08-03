// console.log(null ?? "default");
// console.log(undefined ?? "default");
// console.log(false ?? "default");
/////////////////////////////////////////////////
// let petName = "Rocky"; // Global Variable
myFunction();

function myFunction() {
  //   console.log("Inside myFunction - Type of petName:", typeof petName);
  //   console.log("Inside myFunction - petName:", petName);
}

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

const a = [1, 2, 3];
const b = [1, 2, 3];
// console.log(a == b, a === b);
// Explanation: Arrays are objects and compared by reference. a and b are distinct objects, so both loose (==) and strict (===) comparisons yield false.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 100);
}
