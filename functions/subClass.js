'use strict'

class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  riseSalary(percent) {
    this.salary *= 1 + percent / 100
  }

  get getSalary() {
    return this.salary
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary)
    this.bonus = bonus
  }
}

const boss = new Manager('Mary', 2000)
console.log(boss.getSalary)
