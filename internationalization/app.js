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
