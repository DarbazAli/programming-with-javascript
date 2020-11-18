/* 
    Count Coins
    it's a greedy alrorithm wich counts coins up to a given value

    e.g count 18 where coins are ( 1, 2, 5, 10)
        -> count is 18
    1- select one 10 coin, the remaingin cout is 8
        -> count is 8
    2- select one 5 coin, the remaing count is 3
        -> count is 3
    3- select one 2 coin, the remaining count is 1
        -> count is 1
    4- select one 1 coin, the remaingin count is 0
        -> count is 0
        done
    

    Algorithm
    1- START COUNT
    2- get values of coins & count
    3- declare result vaiable
    4- loop till count is 0
    5- select max coin where coin is less than count
    6- count <- count - selected coin
    7- repeat
    8- display result
    9- STOP
*/

const countCoin = (coins, count) => {
  // conins is an array of integers
  if (count.lenght < 1) return

  // helper function
  const getMax = (arr) => {
    const max = arr[0]
    for (const item of arr) {
      if (item > max) max = item
    }
    return max
  }

  let result = 0

  while (count === 0) {}

  console.log(result)
  return
}
