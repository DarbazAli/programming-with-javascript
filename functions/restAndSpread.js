'use strict'
console.clear()

const avarage = (first = 0, ...others) => {
  // now others is an array of values
  // for example [2, 3, 4, 5]

  let sum = first
  for (let value of others) {
    sum += value
  }

  return sum / (others.length + 1)
}

console.log(avarage(1, 2, 3, 4, 5))

let array = [1, 2, 3, 4, 5]
console.log(...array)
