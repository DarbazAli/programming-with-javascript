'use strict'
console.clear()

function Employee(name, salary) {
  this.name = name
  this.salary = salary
}

Employee.prototype.riseSalary = function (percent) {
  this.salary *= 1 + percent / 100
}

const harry = new Employee('Harry Smith', 90000)
const will = new Employee('Will Smith', 80000)

harry.riseSalary(10)

harry
