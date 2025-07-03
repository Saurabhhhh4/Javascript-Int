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

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// const n = 5;
// const result = factorial(n);
// console.log(result);

// function prime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const number = 2;
// const result = prime(number);
// console.log(result);

// function evenNumber(num) {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const number = 5;
// const result = evenNumber(number);
// console.log(result);

// function evenNumber(number) {
//   const evenArray = [];
//   for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       evenArray.push(number[i]);
//     }
//   }
//   return evenArray;
// }

// const number = [1, 2, 3, 3, 4, 45, 6, 8];
// const result = evenNumber(number);
// console.log(result);

function capital(str) {
  const word = str.split(" ");

  const capitalword = word.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalword.join(" ");
}

const input = "saurabh is good guy";
const capitalleter = capital(input);
console.log(capitalleter);
