'use strict'
console.clear()

/* Linear Search Algorithm */
const linearSearch = (array, n) => {
  for (let item of array) {
    if (item == n) return true
  }
  return false
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)) // true
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)) // false

// bubble sort
// swap helper function
const swap = (array, index1, index2) => {
  let temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

const bubbleSort = (array) => {
  for (let i = 0, len = array.length; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j)
      }
    }
  }

  return array
}

console.log(bubbleSort([6, 5, 1, 2, 3, 4]))
