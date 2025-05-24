function person() {
  this.name = "saurabh";
  setTimeout(function () {
    // console.log(`hi  ${this.name}`);
  }, 1000);
}
person();

function person1() {
  this.name = "saurabh";
  setTimeout(() => {
    // console.log("hi " + this.name);
  }, 1000);
}
person1();

const nums = [1, 2, 3, 4];
const double = nums.map((n) => n * 2);
// console.log(double);

const events = nums.filter((nums) => nums % 2 === 0);
// console.log(events);

const sum = nums.reduce((total, sum) => total + nums, 0);
// console.log(sum);

setTimeout(() => {
  // console.log("Done!!");
}, 100);

// document.getElementById("outerDiv").addEventListener("click", function () {
//   console.log("Outer div clicked");
// });

// document.getElementById("innerBtn").addEventListener("click", function () {
//   console.log("Button clicked");
// });

//To avoid event bubling
// document.getElementById("btn").addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("clicked");
// });

//AJAX

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.example.com/data", true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText);
//     console.log(response); // Update DOM here
//   }
// };

// xhr.send();
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

const dog = {
  bark() {
    console.log("Dog barks");
  },
};

// Inherit from animal
dog.__proto__ = animal;

console.log(dog.eats); // true (inherited)
dog.walk(); // "Animal walks" (inherited)
dog.bark(); // "Dog barks" (own method)
