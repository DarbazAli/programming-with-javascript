'use strict'
/* 
A getter is a method without parameters that is declared with the keyword 'get'

*/

class Person {
  constructor(last, first) {
    this.last = last
    this.first = first
  }

  get fullName() {
    return `${this.last}, ${this.first}`
  }

  set fullName(value) {
    const parts = value.split(/,\s*/)
    this.last = parts[0]
    this.first = parts[1]
  }
}

const harry = new Person('Smith', 'Harry')
harry.fullName = 'Smith, Harold'

console.log(harry.fullName)
