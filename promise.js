// Sync - event handlers - buttin - alert,<p> - JS single thread 
// Async - fetch(file),display(file) - callbacks , promise 

//Promise - real time promise
// Scenario - writing exam - pass - party , fail - temple

// IN terms of js
//writing exam - promise
// waiting for the result - asyn operations is JS
// pass/fail - promise is fulfiled
// Pass - promise is fullfiled
//Fail - promiseis rejected
//Hosting party - success Callback
//temple - failure callback
let a = 5
let p = new Promise(function(resolve,react){
    if(a==5){
        resolve('Success')

    }
    else{
        react('Failure')
    }
    
})
/*
console.log(p)
p.then((message)=>{
    console.log(message + ' then is executed ')
}).catch((result)=>{
    console.log(result + ' catch is executed ' )
})

*/

const r1 = new Promise((resolve,react)=>{
    resolve(' video 1 is recorded')
})

const r2 = new Promise((resolve,react)=>{
    resolve(' video 2 is recorded')
})

const r3 = new Promise((resolve,react)=>{
    resolve(' video 3 is recorded')
})
// promsie.all - only fullfiled , allSettled - everything including rejected
// Promise.race - first promise to be completed is displayed (here rejected - failure)
Promise.allSettled([
    p,r1,r2,r3
]).then(
    (msg)=>{console.log(msg)}
).catch(
    (msg)=>{console.log(msg)}
)