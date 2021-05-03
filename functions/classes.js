'use strict'
console.clear()

// Emplyee Class
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  riseSalary(percent) {
    this.salary *= 1 + percent / 100
  }
}

const harry = new Employee('Harry Smith', 90_000)
harry.riseSalary(10)

harry
