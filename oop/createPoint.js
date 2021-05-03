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
