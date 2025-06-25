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

function findLargestElement(arr) {
  let max = -Infinity;
  function helper(nestedArr) {
    for (let item of nestedArr) {
      if (typeof item === "number") {
        max = Math.max(max, item);
      } else if (Array.isArray(item)) {
        helper(item);
      }
    }
  }
  helper(arr);
  return max;
}
const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
const largestElement = findLargestElement(nestedArray);
console.log("Largest element:", largestElement);
