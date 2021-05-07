'use strict'

/* 
    1) specifying a local
*/
const newYear = new Date()

console.log(newYear)

console.log(newYear.toLocaleString('de')) // Denmark
console.log(newYear.toLocaleString('ar')) // Arabic - Iraq
console.log(newYear.toLocaleString('de')) // Germany
console.log(newYear.toLocaleString('de', { timeZone: 'Asia/Tokyo' }))
