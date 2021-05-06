'use strict'

/* 
    1) Converting between strings and code points
*/

// creating a string from a squence of unicode code points
let str = String.fromCodePoint(72, 0x69, 0x20, 0x1f310, 0x21)
console.log(str)

// converting the string in to characters
let chars = [...str]
console.log(chars)

chars.map((c) => {
  console.log(c.codePointAt(0))
})

console.log('a'.codePointAt(0))
console.log('A'.codePointAt(0))
console.log('Z'.codePointAt(0))

// Template literals
const name = 'Max'
console.log(`Hi, my name is ${name}.`)
console.log(`2 * 2 = ${2 * 2}`)

// Tagged templates
const tag = (string) => {
  console.log(string)
}

tag`this is a row string\n`
