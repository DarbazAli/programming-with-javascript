'use strict'

const sym = Symbol('label')
const sym2 = Symbol('label')

console.log(sym === sym2)

console.log(typeof sym)

let obj = {
  [sym]: 'Symbol value',
}

console.log(obj[sym])
console.log(obj[sym2])

/*===============================================================================
Customizing toString
================================================================================*/
//  Costomizing toString() method of Object class

const harry = { name: 'Harry Smith', salary: 10_000 }
// by default harry.toString() yields [object Object]
console.log(harry.toString()) // [object Object]

// now, lets modify it with Symbol.toStringTag
harry[Symbol.toStringTag] = 'Employee'
console.log(harry.toString()) // [object Employee]

// alternatively, you can set the property in the constructor
class Employee {
  constructor(name, salary) {
    this[Symbol.toStringTag] = 'Employee'
    this.name = name
    this.salary = salary
  }
}

const mac = new Employee('Mac Redford', 90_000)
console.log(mac.toString()) // [object Employee]
