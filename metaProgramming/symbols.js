'use strict'

const sym = Symbol('label')
const sym2 = Symbol('label')

console.log(sym === sym2)

console.log(typeof sym)

let obj = {
  [sym]: 'Symbol value',
}

console.log(sym.description)
