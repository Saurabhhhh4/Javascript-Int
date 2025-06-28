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

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func.apply(this, args);
//     }
//   };
// }
// ////////////////
// document.getElementById("container").addEventListener("click", function (e) {
//   if (e.target.tagName === "BUTTON") {
//     alert("Clicked: " + e.target.innerText);
//   }
// });

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// Example usage:
function handleInputChange(event) {
  console.log(event.target.value);
}
// Debounce with a 500ms delay
const debouncedHandleInputChange = debounce(handleInputChange, 500);
// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.getElementById("myInput");
  if (inputElement) {
    inputElement.addEventListener("input", debouncedHandleInputChange);
  } else {
    console.error("Element with ID 'myInput' not found.");
  }
});
