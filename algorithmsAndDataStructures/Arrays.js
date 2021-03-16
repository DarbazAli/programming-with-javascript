/* 
    ARRAYS IN JAVASCRIPT
*/

const arr = [1, 2, 3, 4]

/* ARRAY OPERATIONS */

/* 
-------------------------------------------------------------------------------
INSERTION 
Insertion means adding a new element to the array
JavaScript uses .push() method to add a new element to an array
.push() adds new element to the end of the array

The Time complexity of this operation is O(1)
*/

arr.push(5)
// arr = [1, 2, 3, 4, 5]

arr.push(7)
// arr = [1, 2, 3, 4, 5, 7]

/* 
-------------------------------------------------------------------------------------
DELETION
JavaScript implemnts array deletion with .pop() method
This method removes the last item of the array, and it's also returns the removed item

JavaScript als o uses .shift() method to remve items from the begining of the array
This method also returns the deleted item

The Time complexity of these operations are O(1)
*/

arr.pop()
// arr = [1, 2, 3, 4, 5]

arr.shift()
// arr = [2, 3, 4, 5]

/* 
---------------------------------------------------------------------------------------
ITERATION
Iteration is the process of accessing each of teh items contained withing a data structure
All iteration methods have a tiem complexity of O(n)

1. for (variable, condition, modification)

2. while( condition)

3. for (in)

4. for (of)

5. forEach()
*/

// 1. for (; ; )
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i])
}
// infinite for loop
let breakCondition = true
for (;;) {
  if (breakCondition) {
    break
  }
}

// while
let counter = 0
while (counter < arr.length) {
  //   console.log(arr[counter])
  counter++
}

// for (in)
for (let index in arr) {
  //   console.log(arr[index])
}

// for (of)
for (let item of arr) {
  //   console.log(item)
}

// forEach
arr.forEach((item, index) => {
  //   console.log(item)
})

/* 
---------------------------------------------------------------------------------
HELPER FUNCTIONS
1. slice(begin, end)
this helper function returns a portion of an existing array without modifying the original one
.slice takes two parameters: the beginning index, and the ending index

const arr = [1, 2, 3, 4]
arr.slice(1, 2) // returns [2]
*/

/* EXERCISES */

// 1. Find 2 array elements in an array that add up to a number, f(n) = O(n^2)
const findSum = (arr, weight) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === weight) {
        return [i, j]
      }
    }
  }

  return -1
}

// approach 2
// f(n) = O(n)
const findSumBetter = (arr, weight) => {
  const hashtable = {}

  for (let i = 0, len = arr.length; i < len; i++) {
    let item = arr[i]
    let diff = weight - item

    // check the right one already exists
    if (hashtable[item] !== undefined) {
      return [i, hashtable[weight - item]]
    } else {
      // sort index
      hashtable[diff] = i
    }
  }

  return -1
}

// Implementing Array.slice() function from scratch
const arraySlice = (array, begin, end) => {
  // if no parameters passed, return the array
  if (!begin && !end) {
    return array
  }

  // if only beginning index is found, set end to size
  end = array.length

  const partArray = []

  // if if both begin and end found, return part of the array
  for (let i = begin; i < end; i++) {
    partArray.push(array[i])
  }

  return partArray
}

// console.log(arraySlice([1, 2, 3, 4], 1, 2))

/* FUNCTIONAL ARRAY METHODS */

//.map
const arr3 = [1, 2, 3, 4, 5]
const arr4 = arr3.map((item) => item * 10)
console.log(arr4) // returns [ 10, 20, 30, 40, 50 ]

// .filter
const filterArr = [10, 20, 30, 40, 50].filter((item) => item > 30)
console.log(filterArr) // returns [40, 50]

// .reduce
const reduceArr = [1, 2, 3, 4, 5].reduce((prev, curr) => prev + curr, 0)
console.log(reduceArr) // returns 15
