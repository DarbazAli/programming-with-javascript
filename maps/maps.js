'use strict'

const map = new Map([
  ['Mon', 0],
  ['Tue', 1],
  ['Wed', 2],
])

console.log(map)

for (const [key, value] of map) {
  console.log(key, value)
}

let wed = map.get('Wed')
console.log(wed)
