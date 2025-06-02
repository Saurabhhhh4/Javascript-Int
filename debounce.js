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

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
////////////////
document.getElementById("container").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    alert("Clicked: " + e.target.innerText);
  }
});
