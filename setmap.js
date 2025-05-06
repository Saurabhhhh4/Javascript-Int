// Create a Set from an array with duplicate numbers.
const arr = [1, 2, 3, 2, 4, 1];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

// Using Array.prototype.filter() and indexOf()
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

// 2. Using reduce() and includes()
const numbers2 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers2 = numbers.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);

console.log(uniqueNumbers2); // Output: [1, 2, 3, 4, 5]
