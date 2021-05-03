'use strict'

class Random {
  static nextDouble(low, high) {
    return (Math.random() * (high - low) + low).toFixed(2)
  }
  static nextInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
  }

  static nextElement(array) {
    return array[this.nextInt(0, array.length - 1)]
  }
}

console.log(Random.nextDouble(11, 30))
console.log(Random.nextInt(11, 30))
console.log(Random.nextElement([1, 2, 3, 4, 5]))
