const path = require('path')

console.log(path.sep)

const filePath = path.join('/subfolder','text.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'/subfolder','text.txt' )
console.log(absolute)