'use strict'
console.clear()

/* 

Write an Algorithm to calculate how much time needed per day to read a book in One week
based on number of pages and reading pace.

1- START calcReadTime
2- get values of page numbers and reading pace
3- timeInMin <- pageNumber * paceTime
4- timeInHour <- timeInMin  / 60
5- timePerDay <- timeINHour / 7
6- display tiemPerDay
7- STOP

SP = C + SP(I)
SP = 1 + 2

*/

const calcReadTime = (numberOfPages, readPace) => {
  const time = (numberOfPages * readPace) / 7

  return console.log(
    `${numberOfPages} Pages: ${Math.round(time)} minutes per day`
  )
}

calcReadTime(720, 2.5)
calcReadTime(223, 2.5)
