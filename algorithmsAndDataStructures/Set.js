'use strict'
console.clear()
// Set is a group of unordered uniqe (no duplicate) elements
// Set operations has O(1) time complexity

const exampleSet = new Set()

/* SET operations
Set is a powerful data structure for perfroming uniqueness checks.
*/
// Insertion

exampleSet.add(1) // {1}
exampleSet.add(1) // still {1}
exampleSet.add(2) // {1, 2}

// Deletion
exampleSet.delete(2) // returns ture
exampleSet.delete(2) // returns false

// Contains
exampleSet.has(1) // reuturns true
exampleSet.has(2) // returns false
exampleSet.add(2)
exampleSet.has(2) // returns true

/* UTILITY FUNCTIONS FOR SETS */

// Intersection
// The intersection of tow sets  consists of teh common elements between thors two sets

const intersection = (setA, setB) => {
  let intersection = new Set()

  for (let element of setB) {
    if (setA.has(element)) {
      intersection.add(element)
    }
  }

  return intersection
}

var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3, 4])

console.log(intersection(setA, setB))

// isSuperSet
const isSuperset = (setA, subset) => {
  for (let elem of subset) {
    if (!setA.has(elem)) {
      return false
    }
  }
  return true
}

var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([5])

console.log(isSuperset(setA, setB)) // true
console.log(isSuperset(setA, setC)) // false

// Union
// returns a new set without duplicats from tow other sets
const unionSet = (setA, setB) => {
  const union = new Set(setA)
  for (let elem of setB) {
    union.add(elem)
  }

  return union
}

console.log(unionSet(setA, setB))

// Difference
const differenceSet = (setA, setB) => {
  const difference = new Set(setA)

  for (let elem of setB) {
    difference.delete(elem)
  }

  return difference
}

console.log(differenceSet(setA, setB))

/* ----------------------------------------------------------------- */

// Ex. 1) Using sets to check for duplicats in an array
// f(n) = O(n)
const checkDuplicats = (arr) => new Set(arr).size < arr.length

console.assert(checkDuplicats([1, 2, 3, 4, 5, 5])) // true
console.assert(checkDuplicats([1, 2, 3, 4, 5])) // false

// Ex. 2) Returning all unique values from separate arrays
// f(n) = O(n + m) => n: arr1.length, m: arr2.length
const uniqueList = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2)))

console.log(uniqueList([1, 1, 2, 3, 'hello'], [2, 3, 4, 5, 'hello']))
