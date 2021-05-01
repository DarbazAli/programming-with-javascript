'use strict'
console.clear()

// 1. Assigning a value to a previously undeclared variable is an error
// and does not create  global variable
// x = 25
// ReferenceError: x is not defined

// You cannot assign a new alue to a read-only global property such as NaN or undefined
// global.NaN = 'NAN'
// TypeError: Cannot assign to read only property 'NaN' of object '#<Object>'

// function avarge(x, x) {
//   return (x + x) / 2
// }
// SyntaxError: Duplicate parameter name not allowed in this context

// function f(foo, values) {
//   with (foo) {
//     console.log(values)
//   }
// }
// SyntaxError: Strict mode code may not include a with statement
