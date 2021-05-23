'use strict'

// O(n) Time | O(1) Space
const multiplesOf3and5 = (number) => {
  let result = 0

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 3 === 3 || i % 5 === 0 || i % 5 === 5) {
      result += i
    }
  }

  return result
}

console.log(multiplesOf3and5(10)) // should return 23
console.log(multiplesOf3and5(49)) // should return 543
console.log(multiplesOf3and5(1000)) // should return 233168
