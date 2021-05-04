'use strict'

/* 
    1) Number Literals
*/

const dec = 42
const hex = 0x2a
const oct = 0o52
const bin = 0b101010

const sppedOfLight = 299_792_458

/* 
    2) Number Formating
*/

console.log(hex.toString(16)) // octal
console.log(hex.toString(10)) // decimal
console.log(hex.toString(2)) // binary

/* 
    3) Number Parsing
*/

// string to float
parseFloat('3.14') // number 3.14
parseInt('3') // number 3

/* 
    4) Number Functions and Constants
*/

// Static properties
console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.prototype)

// Static Methods
console.log(Number.isNaN(NaN)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(Number.isInteger(22)) // true
console.log(Number.isSafeInteger(2 ** 53 - 1)) // true
console.log(Number.isSafeInteger(2 ** 53)) // false
console.log(Number.parseFloat(22))
console.log(Number.parseInt(3.14))
