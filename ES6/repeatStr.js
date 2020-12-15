console.clear()

const str = 'hello, my name is Darbaz'

const rStr = str.split(' ').reduce((a, b) => (a > b ? a : b))
console.log(rStr)
