// first letter of every word should be in upper case

// function capitalizeFirstLetterOfEachWord(str) {
//   const words = str.split(" ");
//   const capitalizedWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizedWords.join(" ");
// }
// const inputString = "hello world this is a sample string";
// const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
// console.log("Capitalized string:", capitalizedString);

// ......AbortController

// function findLargestElement(arr) {
//   let max = -Infinity;
//   function helper(nestedArr) {
//     for (let item of nestedArr) {
//       if (typeof item === "number") {
//         max = Math.max(max, item);
//       } else if (Array.isArray(item)) {
//         helper(item);
//       }
//     }
//   }
//   helper(arr);
//   return max;
// }
// const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
// const largestElement = findLargestElement(nestedArray);
// console.log("Largest element:", largestElement);

// function flattenArray(arr) {
//   const flattened = [];
//   function flattenHelper(nestedArr) {
//     for (let item of nestedArr) {
//       if (Array.isArray(item)) {
//         flattenHelper(item); // Recursively flatten the nested array
//       } else {
//         flattened.push(item); // Push non-array items into the flattened array
//       }
//     }
//   }
//   flattenHelper(arr);
//   return flattened;
// }
// const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log("Flattened array:", flattenedArray);

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const arr = [3, 6, 8, 4, 9];

// const max = findMax(arr);
// console.log(max);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// const number = 5;
// const result = factorial(number);
// console.log("Factorial of " + number + " is " + result);

// function fibonaccci(n) {
//   if (n <= 0) {
//     return [];
//   } else {
//     if (n === 1) {
//       return [0];
//     }
//   }
//   const sequence = [0, 1];

//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }
//   return sequence;
// }
// const terms = 10;
// const fibonacciSequence = fibonaccci(terms);
// console.log(fibonacciSequence);

// function flattenArray(arr) {
//   const flattened = [];
//   function flattenHelper(nestedArr) {
//     for (let item of nestedArr) {
//       if (Array.isArray(item)) {
//         flattenHelper(item); // Recursively flatten the nested array
//       } else {
//         flattened.push(item); // Push non-array items into the flattened array
//       }
//     }
//   }
//   flattenHelper(arr);
//   return flattened;
// }
// const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
// const flattenedArray = flattenArray(nestedArray);
// console.log("Flattened array:", flattenedArray);

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [...arr].reverse(); // or arr.slice().reverse()
// console.log(reversedArr); // [5, 4, 3, 2, 1]

// let arr1 = [10, 20, 30, 40, 50];
// arr.reverse();
// console.log(arr);

// const chunkArray = (arr, len) => {
//   // Init chunked arr
//   const chunkedArr = [];
//   // Set index
//   let i = 0;

//   // Loop while index is less than the array length
//   while (i < arr.length) {
//     // Slice out from the index to the index + the chunk length nd push on to the chunked array
//     chunkedArr.push(arr.slice(i, i + len));
//     // Increment by chunk length
//     i += len;
//   }

//   return chunkedArr;
// };
// const res = chunkArray([1, 4, 5, 1, 3, 2, "d", 2], 2);
// console.log(res);

// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const isAnagram = (str1, str2) => {
  return formatStr(str1) === formatStr(str2);
};

//function to remove special char and sort to match the strings
let formatStr = (str) => {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
};

const res = isAnagram("Inch", "Chin");
console.log(res);
