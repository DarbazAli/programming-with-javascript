/* 
Exercise
1. Convert Decimal (base 10) to Binary Number
*/

const base10ToString = (n) => {
  let binaryString = ''

  const helper = (n) => {
    if (n < 2) {
      binaryString += nn\
      return
    } else {
      helper(Math.floor(n / 2))
      helper(n % 2)
    }
  }
  helper(n)
  return binaryString
}

console.log(base10ToString(1024))
