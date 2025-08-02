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

// function findMissingNumberSort(arr) {
//   arr.sort((a, b) => a - b); // Sort the array

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i) {
//       return i;
//     }
//   }

//   return arr.length; // If all match, then missing is 'n'
// }

// console.log(findMissingNumberSort([3, 0, 1])); // Output: 2

// function findMissingNumberSet(arr) {
//   const numSet = new Set(arr);
//   const n = arr.length;

//   for (let i = 0; i <= n; i++) {
//     if (!numSet.has(i)) {
//       return i;
//     }
//   }
// }

// console.log(findMissingNumberSet([3, 0, 1])); // Output: 2

// function findMissingNumberSort(arr) {
//   arr.sort((a, b) => a - b); // Sort the array

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== i) {
//       return i;
//     }
//   }

//   return arr.length; // If all match, then missing is 'n'
// }

// console.log(findMissingNumberSort([3, 0, 1])); // Output: 2

// function secondHighest(arr) {
//   const freqMap = {};

//   // Step 1: Count the frequency of each element
//   for (let str of arr) {
//     freqMap[str] = (freqMap[str] || 0) + 1;
//   }

//   // Step 2: Variables to track the highest and second highest frequency
//   let max1 = 0,
//     max2 = 0;
//   let first = "",
//     second = "";

//   for (let key in freqMap) {
//     const count = freqMap[key];

//     if (count > max1) {
//       max2 = max1;
//       second = first;

//       max1 = count;
//       first = key;
//     } else if (count > max2 && key !== first) {
//       max2 = count;
//       second = key;
//     }
//   }

//   return second;
// }

// // Step 3: Test input with "d" added 5 times
// const arr = [
//   "a",
//   "b",
//   "c",
//   "b",
//   "a",
//   "a",
//   "d",
//   "d",
//   "d",
//   "d",
//   "d",
//   "a",
//   "a",
//   "a",
// ];
// console.log(secondHighest(arr)); // Output: "a"

// function wordBreak(s, wordDict) {
//   const wordSet = new Set(wordDict);
//   const dp = Array(s.length + 1).fill(false);
//   dp[0] = true;

//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && wordSet.has(s.substring(j, i))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }

//   return dp[s.length];
// }

// // Test case
// const s = "applepenapple";
// const wordDict = ["apple", "pen"];
// console.log(wordBreak(s, wordDict)); // ✅ Output: true

// function wordBreak(s, wordDict) {
//   const wordSet = new Set(wordDict);
//   const dp = Array(s.length + 1).fill(false);
//   dp[0] = true;

//   for (let i = 1; i <= s.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && wordSet.has(s.substring(j, i))) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }

//   return dp[s.length];
// }

// // Test case
// const s = "applepenapple";
// const wordDict = ["apple", "pen"];
// console.log(wordBreak(s, wordDict)); // ✅ Output: true

function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

// Test Case 1
let s1 = "applepenapple";
let wordDict1 = ["apple", "pen"];
console.log(wordBreak(s1, wordDict1)); // true

// Test Case 2
let s2 = "catsandog";
let wordDict2 = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s2, wordDict2)); // false

function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
}

const s = "applepenapple";
const wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict)); // ✅ Output: true
