'use strict'
console.clear()

const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 54,
}

const { name, age } = person

const a = [1, 2, 3, 4]
const [first, second, ...others] = a

console.log(first, second, others)
