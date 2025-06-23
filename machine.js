// Write a JavaScript function that calculates the sum of two numbers

// function sum(a, b) {
//   return a + b;
// }
// const num1 = 10;
// const num2 = 20;
// const result = sum(num1, num2);
// console.log("The sum of", num1, "and", num2, "is", result);

///////////////////////////////
// Write a JavaScript program to reverse the given string

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// const input = "saurabh the goat ";
// const reversedString = reverseString(input);
// console.log("Reversed String :", reversedString);

// Write a JavaScript function that finds the maximum number in an array
// function findMax(arr) {
//   if (arr.length === 0) {
//     return null; // Handle empty array
//   }
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [10, 5, 25, 8, 15];
// const maxNumber = findMax(numbers);
// console.log("The maximum number is:", maxNumber);

// function maxNum(arr) {
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

// const num = [10, 20, 93, 20];
// const maxNumm = maxNum(num);
// console.log(maxNumm);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// const number = 5;
// const result = factorial(number);
// console.log("Factorial of", number, "is", result);

// function findMax(arr) {
//   if (arr.length === 0) {
//     return null; // Handle empty array
//   }
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const numbers = [10, 5, 25, 8, 15];
// const maxNumber = findMax(numbers);
// console.log("The maximum number is:", maxNumber);

// function isPrime(number) {
//   if (number <= 1) {
//     return false; // Numbers less than or equal to 1 are not prime
//   }
//   for (let i = 2; i * i <= number; i++) {
//     if (number % i === 0) {
//       return false; // If divisible by any number between 2 and the square root of a number, it's not prime
//     }
//   }
//   return true; // If the loop completes without finding a divisor, the number is prime
// }
// const num = 17;
// const isPrimeResult = isPrime(num);
// if (isPrimeResult) {
//   console.log(num, "is a prime number.");
// } else {
//   console.log(num, "is not a prime number.");
// }

// const orders = [
//   {
//     orderId: "001",
//     customer: { name: "Alice", premiumMember: true },
//     items: [
//       { name: "Laptop", category: "Electronics", price: 1000, quantity: 1 },
//       { name: "Mouse", category: "Electronics", price: 50, quantity: 2 },
//     ],
//   },
//   {
//     orderId: "002",
//     customer: { name: "Bob", premiumMember: false },
//     items: [
//       { name: "Shirt", category: "Clothing", price: 40, quantity: 3 },
//       { name: "Laptop", category: "Electronics", price: 1000, quantity: 1 },
//     ],
//   },
//   {
//     orderId: "003",
//     customer: { name: "Carol", premiumMember: true },
//     items: [
//       { name: "Headphones", category: "Electronics", price: 200, quantity: 1 },
//       { name: "Jacket", category: "Clothing", price: 120, quantity: 1 },
//     ],
//   },
// ];

// // Step 1: Only premium member orders
// const premiumOrders = orders.filter((order) => order.customer.premiumMember);

// // Step 2: Extract and flatten their items
// const premiumItems = premiumOrders.map((order) => order.items).flat();

// // Step 3: Filter items with price > 500
// const expensiveItems = premiumItems.filter((item) => item.price > 500);

// // Step 4: Remove duplicates by item name using Set
// const uniqueExpensiveItemsMap = new Map();
// expensiveItems.forEach((item) => {
//   if (!uniqueExpensiveItemsMap.has(item.name)) {
//     uniqueExpensiveItemsMap.set(item.name, item);
//   }
// });

// // Step 5: Convert Map values to array
// const uniqueExpensiveItems = Array.from(uniqueExpensiveItemsMap.values());

// console.log(uniqueExpensiveItems);

//Traverse through all the node of every parent and child

// const graph = {
//   A: ["B"],
//   B: [],
//   C: ["D"],
//   D: [],
//   E: [],
// };

// function bfsFullGraph(graph) {
//   const visited = new Set();

//   for (const node in graph) {
//     if (!visited.has(node)) {
//       bfs(graph, node, visited);
//     }
//   }
// }

// function bfs(graph, startNode, visited) {
//   const queue = [startNode];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     if (!visited.has(current)) {
//       console.log(current); // Visit
//       visited.add(current);

//       for (const neighbor of graph[current]) {
//         if (!visited.has(neighbor)) {
//           queue.push(neighbor);
//         }
//       }
//     }
//   }
// }

// bfsFullGraph(graph);
/////

// const input = "123 11 23 45";

// // Step 1: Split by space
// const numbers = input.split(" ");

// // Step 2: Map to digit sums
// const digitSums = numbers.map((num) => {
//   return num
//     .split("") // Split digits
//     .map(Number) // Convert to numbers
//     .reduce((a, b) => a + b, 0); // Sum
// });

// // Step 3: Join as space-separated string
// const output = digitSums.join(" ");

// console.log(output); // Output: "6 2 5 9"

// input ="123 11 23 45"
// output =" 2 5 6 9"write code in js

// const input1 = "123 11 23 45";

// const output1 = input
//   .split(" ")
//   .map((num) => num.split("").reduce((sum, digit) => sum + Number(digit), 0))
//   .sort((a, b) => a - b)
//   .join(" ");

// console.log(output1); // Output: "2 5 6 9"

// async function fetchSequentially() {
//   try {
//     const userData = await fetchUser(); // Waits for fetchUser to resolve
//     const postsData = await fetchPosts(userData.id); // Waits for fetchPosts
//     const commentsData = await fetchComments(postsData.id); // Waits for fetchComments
//     return { user: userData, posts: postsData, comments: commentsData };
//   } catch (error) {
//     console.error("Error fetching data:", error); // Centralized error handling
//   }
// }

function secondHighestRepeating(arr) {
  const freqMap = {};

  // Step 1: Count frequency
  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Convert to array and sort by frequency
  const sortedByFreq = Object.entries(freqMap).sort((a, b) => b[1] - a[1]); // Descending by count

  // Step 3: Handle edge cases
  if (sortedByFreq.length < 2) {
    return null; // Not enough unique elements
  }

  // Step 4: Return second highest repeating element
  return sortedByFreq[1][0]; // key of second entry
}

// 🔍 Example
const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];
console.log(secondHighestRepeating(arr)); // Output: 2 or 5 (depends on sort stability)
