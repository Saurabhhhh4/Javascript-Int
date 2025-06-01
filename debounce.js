// function debounce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout); // Clear previous timer
//     timeout = setTimeout(() => {
//       func.apply(this, args); // Run the function after delay
//     }, delay);
//   };
// }

// const searchInput = document.getElementById("search");

// searchInput.addEventListener(
//   "input",
//   debounce(function (e) {
//     console.log("API called with:", e.target.value);
//   }, 500)
// );
