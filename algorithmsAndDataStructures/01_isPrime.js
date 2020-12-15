'use strict'
console.clear()

/* 
Number Algorithm
Primality Test:
Primality test can be done by iterating from 2 to n, checking whether modules
division is equal to zero.

*/

const isPrime_1 = (n) => {
  if (n <= 1) return false

  // check for 2 to n-1
  for (let i = 0; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

// f(n) = O(n)

// console.log(isPrime_1(555))

const isPrime_2 = (n) => {
  if (n <= 1) return false
  if (n <= 3) return true

  if (n % 2 == 0 || n % 3 == 0) return false

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false
    }
  }

  return true
}

// f(n) = O(sqrt(n))
