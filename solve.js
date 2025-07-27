// function findSubarraySumIndexes(arr, target) {
//   const map = new Map();
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     // Case 1: subarray from 0 to i
//     if (currentSum === target) {
//       return [0, i];
//     }

//     // Case 2: subarray from some index after
//     if (map.has(currentSum - target)) {
//       return [map.get(currentSum - target) + 1, i];
//     }

//     // Store current sum with index
//     map.set(currentSum, i);
//   }

//   return null; // no subarray found
// }

// // Example:
// const arr = [1, 2, 3, 4, 5];
// const target = 9;
// console.log(findSubarraySumIndexes(arr, target)); // [1, 3]

function findMissingNumberSort(arr) {
  arr.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return arr.length; // If all match, then missing is 'n'
}

console.log(findMissingNumberSort([3, 0, 1])); // Output: 2
