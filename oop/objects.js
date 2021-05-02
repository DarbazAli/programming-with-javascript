'use strict'
console.clear()

const harry = {
  name: 'Harry Smith', // prop
  salary: 90000, // prop
  riseSalary(percent) {
    // behavior or method
    this.salary += 1 + percent / 100
  },
}

console.log(harry.salary)
harry.riseSalary(10)
console.log(harry.salary)
