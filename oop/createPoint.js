'use strict'
console.clear()

// Implement a function createPoint that creates a point in the plane with a given x and y coordinates.
// Provide methods getX, getY, translate, and sclae

const createPoint = {
  x: 0,
  y: 0,

  getX() {
    return this.x
  },

  getY() {
    return this.y
  },

  translate(xPoint, yPoint) {
    this.x += xPoint
    this.y += yPoint
  },

  scale(factor) {
    this.x *= factor
    this.y *= factor
  },
}

// createPoint.translate(20, 20)

// createPoint.scale(2)

// console.log(createPoint.getX())
// console.log(createPoint.getY())

// Point constructor using Prototypes

function Point(x, y) {
  this.x = x
  this.y = y
}

// getX proto
Point.prototype.getX = function () {
  return this.x
}

// getY proto
Point.prototype.getY = function () {
  return this.y
}

// translage proto
Point.prototype.translate = function (xPoint, yPoint) {
  this.x += xPoint
  this.y += yPoint
}

// scale proto
Point.prototype.scale = function (factor) {
  this.x *= factor
  this.y *= factor
}

const point = new Point(1, 2)
point.translate(10, 10)
point.scale(2)

console.log(point.getX())
console.log(point.getY())

// Point Constructor using class syntax
class Point2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  get getX() {
    return this.x
  }

  get getY() {
    return this.y
  }

  /**
   * @param {number} newX
   */
  set setX(newX) {
    if (typeof newX === 'number') {
      this.x = newX
    } else {
      throw new Error('Please provide a valid number')
    }
  }
  /**
   * @param {number} newY
   */
  set setY(newY) {
    if (typeof newY === 'number') {
      this.y = newY
    } else {
      throw new Error('Please provide a valid number')
    }
  }

  translate(xPoint, yPoint) {
    this.x += xPoint
    this.y += yPoint
  }

  scale(factor) {
    this.x *= factor
    this.y *= factor
  }
}

const point2 = new Point2(0, 0)
point2.translate(4, 5)
point2.scale(2)

point2.setX = 22
point2.setY = 33

console.log(point2.getX)
console.log(point2.getY)
