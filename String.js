// function reverse(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// const input = "hello saurabh";
// const result = reverse(input);
// console.log("reversed are : ", result);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const n = 5;
const result = factorial(n);
console.log(result);
