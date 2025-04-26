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

function removeDuplicates(array) {
  var unique = [];
  for (var i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }
  return unique;
}

var array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(array)); // [1, 2, 3, 4, 5]
