'use strict'
console.clear()

const decodeUrl = (url) => {
  const newUrl = url
    .split('')
    .map((x) => x.toLowerCase())
    .map((x) => x.replace(' ', '-'))
    .join('')
  return console.log(newUrl)
}

decodeUrl('personal library api with mern')
