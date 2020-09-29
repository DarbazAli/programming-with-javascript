'use strict';

console.clear();    // clear the console everytime the script is runned
const log = console.log;    // simplfiy console.log function

// Anonymous Functions
const magic = () => new Date().toUTCString();
log(magic())


// Arrow functions with Parameters 
const doubler = item => item * 2;
log(doubler(2))


// more thatn one parameter
const multer = (item, multer) => item * multer;
log(multer(2, 8));


/* ==========================================
    DEFAULT PARAMETER
============================================ */
const greeting = (name = 'Anonymous') => `Hello ${name}`

log(greeting('Max'))    // Hello Max
log(greeting())         // Hello Anonymous 


/* ==========================================
    REST Parameter ...args
============================================ */
const countArgs = (...args) => `You have passed ${args.length} arguments`;
log(countArgs(1, 2, 3, null, {}))

const sumArgs = (...args) => args.reduce( (item, next) => item + next)
log(sumArgs(1, 2, 3, 4, 5))