'use strict'

/* 
    A fibonacci Sequence is written as:
    0, 1, 1, 2, 3, 5, 8, 13, 21, ...

    Thei Fibonacci sequence is the integer sequence where the first tow terms
    are 0 and 1. After that, the next term is defined as the sum of the previous two terms

*/

const fiboEvenSum = (n = 0) => {
  let n1 = 0
  let n2 = 1

  let sum = 0

  for (let i = 1; i < n; i++) {
    let next = n1 + n2
    if (n1 % 2 === 0) {
      sum += n1
    }

    n1 = n2
    n2 = next

    if (n1 > n) break
  }

  return sum
}

console.log(fiboEvenSum(10)) // should return 10
console.log(fiboEvenSum(34)) // should return 44
console.log(fiboEvenSum(60)) // should return 44
console.log(fiboEvenSum(1000)) // should return 798.
