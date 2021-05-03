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

// private props
class BankAccount {
  #balance = 0
  deposit(amount) {
    this.#balance += amount
  }
}

const harryAcc = new BankAccount()
harryAcc.deposit(20)

console.log(harryAcc.balance)
