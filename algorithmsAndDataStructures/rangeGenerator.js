/* 
Problem: Write an algorithm to generate numbers between 2 given values, star and end.
         The Generator also has to support steps

Solution:
1- START GENERATOR
2- get values of start, end, and steps
3- create a loop between start and end with step modification
4- arr <- current item of the loop
5- display arr
6- STOP
*/

const rangeGenerator = (start, end, step = 1) => {
  const range = []
  for (let i = start; i <= end; i += step) {
    range.push(i)
  }

  return console.log(range)
}

rangeGenerator(0, 10)
rangeGenerator(0, 100, 5)
