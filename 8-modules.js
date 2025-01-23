const names = require('./names');
console.log(names)
const sayHi = require('./utils');
const addValues = require('./mind-grenede')

addValues(4, 5)


const data = require('./alternative-flavor')
// console.log(data)


// sayHi("Susan")
// sayHi(names.john)
// sayHi(names.peter)

/////////////////////////////////////////

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)


// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)