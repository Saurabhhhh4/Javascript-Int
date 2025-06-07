// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // [1, 2, 3, 4, 5]

// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
// console.log(uniqueArray); // [1, 2, 3, 4, 5]

// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = array.reduce((acc, current) => {
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);
// console.log(uniqueArray); // [1, 2, 3, 4, 5]

// function removeDuplicates(array) {
//   var unique = [];
//   for (var i = 0; i < array.length; i++) {
//     if (unique.indexOf(array[i]) === -1) {
//       unique.push(array[i]);
//     }
//   }
//   return unique;
// }

// var array = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(array)); // [1, 2, 3, 4, 5]
// const http = require("http");
// const socketIo = require("socket.io");

// const server = http.createServer(app);
// const io = socketIo(server);

// io.on("connection", (socket) => {
//   console.log("New WebSocket connection");
//   socket.on("disconnect", () => console.log("User disconnected"));
// });

// server.listen(3000, () => console.log("API Gateway running on port 3000"));

// const CircuitBreaker = require("opossum");

// const serviceCall = () => axios.get("http://localhost:4000/users");

// const breaker = new CircuitBreaker(serviceCall, {
//   timeout: 3000,
//   errorThresholdPercentage: 50,
//   resetTimeout: 10000,
// });

// breaker.fallback(() => "Service is currently unavailable");

// breaker
//   .fire()
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error.message));
// const jwt = require("jsonwebtoken");

// app.use((req, res, next) => {
//   const token = req.headers["authorization"];

//   if (!token) return res.status(403).send("Access denied.");

//   jwt.verify(token, "secretKey", (err, decoded) => {
//     if (err) return res.status(401).send("Unauthorized");
//     req.user = decoded;
//     next();
//   });
// });

function sum(a, b) {
  return a + b;
}
const num1 = 10;
const num2 = 20;
const result = sum(num1, num2);
console.log("The sum of", num1, "and", num2, "is", result);
