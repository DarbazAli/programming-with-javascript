const anObject = { y: 'y' }

const x = {
  __proto__: anObject,
}

console.log(anObject.hasOwnProperty('x'))
