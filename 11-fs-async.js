const {readFile, writeFile} = require('fs')
console.log('start')

readFile('./contents/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err)

    }
    console.log(result)
    const first = result;
    readFile('./contents/second.txt', 'utf-8' ,(err, result) =>{
        if (err){
            console.log(err)
        }
        console.log(result)
        const second = result
        writeFile('./contents/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err)

            }
            console.log('Done with this task')
        })
    })
})
console.log('Starting next task')