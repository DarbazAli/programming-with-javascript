'use strict'

/* 
    1) specifying a local

    common lnaguage codes

    Chinese => zh
    Japanese => ja
    Danish => da
    Korean => ko
    Dutch => du
    English => en
    French => fr
    Spanish => es
*/
const newYear = new Date()

console.log(newYear)

console.log(newYear.toLocaleString('de')) // Denmark
console.log(newYear.toLocaleString('ar')) // Arabic - Iraq
console.log(newYear.toLocaleString('de')) // Germany
console.log(newYear.toLocaleString('ja', { timeZone: 'Asia/Tokyo' }))

/* 
    2) Formating Numbers
    We con format a number to a particluar local using number.toLocalString('local')
*/

const number = 123456.78

console.log(number.toLocaleString('de'))
console.log(number.toLocaleString('ar'))
console.log(number.toLocaleString('zh-Hans-CN'))
console.log(number.toLocaleString('ko'))
console.log(number.toLocaleString('sv'))

// Alternatively, we can construct an instance of the Intl.NumberFormat class

const formatter = new Intl.NumberFormat('de', {
  style: 'currency',
  currency: 'EUR',
})

const formatIraq = new Intl.NumberFormat('ar', {
  style: 'currency',
  currency: 'IQD',
})

console.log(formatter.format(number))
console.log(formatIraq.format(number))

/* 
    3) Formatting Date and Time objects
*/

const newYearsEve = new Date(1999, 11, 31, 23, 59)

console.log(newYearsEve.toLocaleDateString('de'))
console.log(newYearsEve.toLocaleTimeString('de'))

console.log(newYearsEve.toLocaleDateString('ar'))
console.log(newYearsEve.toLocaleTimeString('ar'))

const deDateFormatter = new Intl.DateTimeFormat('de', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

console.log(deDateFormatter.format(newYearsEve))

/* 
    4) Callation
*/

const words = ['Alpha', 'Ångström', 'Zulu', 'able', 'zebra']

// sort in english alphabetci order
console.log(words.sort((x, y) => x.localeCompare(y, 'en')))

// sort in Swedish alphabetic order
console.log(words.sort((x, y) => x.localeCompare(y, 'sv')))
