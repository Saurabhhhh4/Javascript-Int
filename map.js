let myMap = new Map();

// Insert
myMap.set("key1", "value1");
myMap.set(42, "numberValue");

// Get
console.log(myMap.get("key1")); // Output: value1

// Update
myMap.set("key1", "newValue1");

// Delete
myMap.delete(42);

// Contains
console.log(myMap.has("key1")); // true
console.log(myMap.has(42)); // false

// set

// Create sets
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

// Check if setA is a superset of setB
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) return false;
  }
  return true;
}

// Union of two sets
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// Intersection of two sets
function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) _intersection.add(elem);
  }
  return _intersection;
}

// Symmetric difference (elements in either set but not both)
function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

// Difference (elements in setA not in setB)
function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// Examples
console.log(isSuperset(setA, setB)); // true
console.log(union(setA, setC)); // Set {1, 2, 3, 4, 5, 6}
console.log(intersection(setA, setC)); // Set {3, 4}
console.log(symmetricDifference(setA, setC)); // Set {1, 2, 5, 6}
console.log(difference(setA, setC)); // Set {1, 2}
