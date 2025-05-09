// Create a Set from an array with duplicate numbers.
// const arr = [1, 2, 3, 2, 4, 1];
// const unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3, 4]

// Using Array.prototype.filter() and indexOf()
// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const uniqueNumbers = numbers.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });

// const mySet = new Set([1, 2, 3, 4, 5]);

// // Convert the Set to an array.
// // const myArray = Array.from(mySet);
// // console.log(myArray); // [1, 3, 4, 5, 8]

// // const myArray = Array.from(mySet);
// // console.log(myArray);

// // mySet.forEach((value) => {
// //   console.log(value);
// // });
// // console.log(mySet.delete[3]);
// // console.log(mySet);

// // console.log(mySet.size);

// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// 2. Using reduce() and includes()
// const numbers2 = [1, 2, 2, 3, 4, 4, 5];

// const uniqueNumbers2 = numbers.reduce((acc, value) => {
//   if (!acc.includes(value)) {
//     acc.push(value);
//   }
//   return acc;
// }, []);

// console.log(uniqueNumbers2); // Output: [1, 2, 3, 4, 5]

// Create a Set and add elements to it.

// const mySet = new Set([1, 2, 3, 4, 5]);
// mySet.add(8);
// console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 8 }
// mySet.add(3); // Adding a duplicate value does not change the Set.
// console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 8 }
// mySet.add(4); // Adding a duplicate value does not change the Set.
// console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 8 }
// mySet.add(6); // Adding a duplicate value does not change the Set.
// console.log(mySet); // Set(6) { 1, 2, 3, 4, 5, 8 }

// // Check if a value exists in the Set.
// console.log(mySet.has(3)); // true
// console.log(mySet.has(6)); // false
// // Delete a value from the Set.
// mySet.delete(2);
// console.log(mySet); // Set(5) { 1, 3, 4, 5, 8 }

// // Get the size of the Set.
// console.log(mySet.size); // 5

// // Iterate over the Set.
// mySet.forEach((value) => {
//   console.log(value); // 1, 3, 4, 5, 8
// });
// // Convert the Set to an array.
// const myArray = Array.from(mySet);
// console.log(myArray); // [1, 3, 4, 5, 8]
// // Convert the Set to an array using spread operator.
// const myArray2 = [...mySet];
// console.log(myArray2); // [1, 3, 4, 5, 8]

// const arr = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9];

// const dub = new Set(arr);
// // const dub = [...new Set(arr)];
// console.log(dub);

// const myArray3 = Array.from(mySet);
// console.log(myArray3); // [1, 3, 4, 5, 8]

// // Convert the Set to an array using spread operator.
// const myArray3 = [...mySet];
// console.log(myArray3);

// // Create a Set from an array with duplicate numbers.
// const arr = [1, 2, 3, 2, 4, 1];
// const unique = [...new Set(arr)];
// // console.log(unique); // [1, 2, 3, 4]

// Using Array.prototype.filter() and indexOf()
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = numbers.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// const num = [1, 2, 2, 3, 4, 4, 5];
// const uniqNum = num.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqNum);

// Using Array.prototype.reduce() and includes()
// const numbers2 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers2 = numbers2.reduce((acc, value) => {
//   if (!acc.includes(value)) {
//     acc.push(value);
//   }
//   return acc;
// }, []);
// console.log(uniqueNumbers2); // Output: [1, 2, 3, 4, 5]

// const num = [1, 2, 2, 3, 4, 4, 5];
// const uniNum = num.reduce((acc, val) => {
//   if (!acc.includes(val)) {
//     acc.push(val);
//   }
//   return acc;
// }, []);
// console.log(uniNum);

const num = [1, 2, 2, 3, 4, 4, 5];
// const uniNum = num.reduce((acc, val) => {
//   if (!acc.includes(val)) {
//     acc.push(val);
//   }
//   return acc;
// }, []);
// console.log(uniNum); // Output: [1, 2, 3, 4, 5]

// Using a Set
// const numbers3 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers3 = [...new Set(numbers3)];
// console.log(uniqueNumbers3); // Output: [1, 2, 3, 4, 5]
// const num = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNum = [...new Set(num)];
// console.log(uniqueNum); // Output: [1, 2, 3, 4, 5]
// const num = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNum = [...new Set(num)];
// console.log(uniqueNum); // Output: [1, 2, 3, 4, 5]
// const num = [1, 2, 2, 3, 4, 4, 5];

// const mySet = new Set([1, 2, 3, 4]);
// console.log(mySet.has(3)); // true
// console.log(mySet.has(6)); // false
// console.log(mySet.size); // 4
// mySet.add(5);
// console.log(mySet); // Set(5) { 1, 2, 3, 4, 5 }
// mySet.delete(2);
// console.log(mySet); // Set(4) { 1, 3, 4, 5 }
// mySet.forEach((value) => {
//   console.log(value); // 1, 3, 4, 5
// });
// // Convert the Set to an array.
// const myArray = Array.from(mySet);
// console.log(myArray); // [1, 3, 4, 5]
// // Convert the Set to an array using spread operator.
// const myArray2 = [...mySet];
// console.log(myArray2); // [1, 3, 4, 5]
// // Create a Set from an array with duplicate numbers.
// const arr = [1, 2, 3, 2, 4, 1];
// const unique = [...new Set(arr)];
// console.log(unique); // [1, 2, 3, 4]
// // Using Array.prototype.filter() and indexOf()
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = numbers.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
// // Using Array.prototype.reduce() and includes()
// const numbers2 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers2 = numbers2.reduce((acc, value) => {
//   if (!acc.includes(value)) {
//     acc.push(value);
//   }
//   return acc;
// }, []);
// console.log(uniqueNumbers2); // Output: [1, 2, 3, 4, 5]
// // Using a Set
// const numbers3 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers3 = [...new Set(numbers3)];

// console.log(uniqueNumbers3); // Output: [1, 2, 3, 4, 5]

// const mySet = new Set([1, 2, 3, 4]);
// mySet.clear();
// console.log(mySet); // Set {}
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// console.log(mySet); // Set(4) { 1, 2, 3, 4 }
// mySet.delete(2);
// console.log(mySet); // Set(3) { 1, 3, 4 }
// mySet.forEach((value) => {
//   console.log(value); // 1, 3, 4
// });
// // Convert the Set to an array.
// const myArray = Array.from(mySet);
// console.log(myArray); // [1, 3, 4]

// const set1 = new Set([1, 2, 3, 4]);
// const set2 = new Set([4, 6, 7, 8]);

// const combine = new Set([...set1, ...set2]);
// console.log(combine);

// const intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);

// function intersection(set1, set2) {
//   //   return new Set([...set1].filter((x) => set2.has(x)));
//   return [...set1].filter((x) => set2.has(x));
// }
// const set1 = new Set([1, 2, 3, 4]);
// const set2 = new Set([4, 6, 7, 8]);
// const result = intersection(set1, set2);

// console.log(result);

// const sentence = "helllo baby what do you do";

// const uniq = [...new Set(sentence.split(" "))];
// console.log(uniq);

// const developers = [
//   { name: "Alice", skills: ["JavaScript", "React"] },
//   { name: "Bob", skills: ["Node.js", "JavaScript"] },
//   { name: "Charlie", skills: ["React", "TypeScript"] },
// ];

// const allskill = developers.flatMap((dev) => dev.skills);

// const uniqskill = [...new Set(allskill)];
// console.log(uniqskill);
///

// const matrix = [
//   [1, 2, 3],
//   [2, 3, 4],
//   [4, 5, 6],
// ];

// const flatArray = matrix.flat();

// const uniq = [...new Set(flatArray)];

// console.log(uniq);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" }, // duplicate
//   { id: 3, name: "Charlie" },
// ];

// const seen = new Set();

// const uniq = users.filter((user) => {
//   if (seen.has(user.id)) {
//     return false;
//   } else {
//     seen.add(user.id);
//     // return true;
//   }
// });
// console.log(uniq);

// const input = "abacjhsfdgjfsjfsss";

// const x = new Set();

// let repeat = null;

// for (let char of input) {
//   if (x.has(char)) {
//     repeat = char;
//     break;
//   }
//   x.add(char);
// }
// console.log(repeat);

// const sentence = "apple banana apple banana chips chips randon";

// const words = sentence.split(" ");

// let x = new Map();

// for (let word of words) {
//   x.set(word, (x.get(word) || 0) + 1);
// }
// const result = Object.fromEntries(x);
// console.log(result);

// const numbers = [1, 2, 4, 6, 7, 9];

// const start = 1;
// const end = 10;

// const numSet = new Set(numbers);

// const miss = [];

// for (let i = start; i <= end; i++) {
//   if (!numSet.has(i)) {
//     miss.push(i);
//   }
// }
// console.log(miss);

// let a = 1,
//   b = 2;

// let temp = a;
// a = b;
// b = temp;
// [a, b] = [b, a];

// console.log(a, b);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];

// const set2 = new Set(arr2);

// const common = arr1.filter((item) => set2.has(item));

// console.log(common);

// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

// const setB = new Set(b);

// const diff = a.filter((item) => !setB.has(item));

// console.log(diff);

// const items = [
//   { name: "apple", category: "fruit" },
//   { name: "banana", category: "fruit" },
//   { name: "carrot", category: "vegetable" },
//   { name: "broccoli", category: "vegetable" },
// ];

// const group = new Map();

// for (let item of items) {
//   const key = item.category;

//   if (!group.has(key)) {
//     group.set(key, []);
//   }
//   group.get(key).push(item.name);
// }
// console.log(group);

const items = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "broccoli", category: "vegetable" },
];

// Step 1: Create a new Map
const grouped = new Map();

for (let item of items) {
  const key = item.category;

  if (!grouped.has(key)) {
    grouped.set(key, []);
  }

  grouped.get(key).push(item.name);
}

console.log(grouped);
// Output:
// Map(2) {
//   'fruit' => [ 'apple', 'banana' ],
//   'vegetable' => [ 'carrot', 'broccoli' ]
// }
