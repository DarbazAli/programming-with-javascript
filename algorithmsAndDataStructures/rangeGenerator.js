'use strict'
console.clear()

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
  if (start > end) return
  if (start === end) return start

  const range = []
  for (let i = start; i <= end; i += step) {
    range.push(i)
  }
  return range
}

const mesureStepsTime = () => {
  console.time('mesureSteps')
  rangeGenerator(0, 100000000, 2)
  console.timeEnd('mesureSteps')
}

mesureStepsTime()
