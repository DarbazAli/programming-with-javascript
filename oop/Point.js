'use strict'

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  // get value of x
  get getX() {
    return this.x
  }

  // get value of y
  get getY() {
    return this.y
  }

  // set new value for x
  set setX(newX) {
    this.x = newX
  }

  // set new value for y
  set setY(newY) {
    this.y = newY
  }

  // chage position of x and y
  translate(x, y) {
    this.x += x
    this.y += y
  }

  // scale x and y by a factor
  scale(factor) {
    this.x *= factor
    this.y *= factor
  }
}

const point = new Point(7, -2)
point.setX = 8
point.setY = -1

point.translate(2, -4)
point.scale(2)

console.log(point)
console.log(point.getX)
console.log(point.getY)
