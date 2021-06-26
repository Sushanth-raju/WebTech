let mySet = new Set()

let set1 = new Set([ 1,2,3,4,5, 'string', {"objectKey" : "ObjValue" }])

console.log(set1.values())
console.log(set1.keys())
// console.log(set1.entries())

if(set1.has('string')){
    set1.delete('string')
}
else{
    set1.clear()
}

set1.add(78)
//console.log(set1.entries)
console.log(set1.size)

for(let i of set1.values()){
    console.log(i)
}


// converting set into am array

let set2 = new Set([3,56,'a string '])
console.log(set2)

let ar1 = [...set2]                     // ... -> destructuring
console.log(ar1)

// converting array into a set

let ar2 = [ 23,24342,2,35,24]
let setConv = [...new Set(ar2)]

console.log(setConv)

// To remove duplicate elemets from array

let ar3 = [2,3,2,3,3,4,33,5,6,7,8,4,3,55,5,2]

//2 ways --- > 1st way
console.log(ar3)
let ar3Set = Array.from(new Set(ar3))
console.log(ar3Set)

// 2nd way

let s3 = new Set(ar3)
console.log(s3)
let ar4 = [...s3]
console.log(ar4)

// performance efficiency

let a =[] , s = new Set()
let b = [1,2,3,4,5,6,7,8,9]

for(let i =0; i<b.length ; i++)
{
   // console.time('array')
    a.push(b[i])
    //console.timeEnd('array')
   
   // console.time('set')
     s.add(b[i])
   //  console.timeEnd('set')
}

let result ;
console.time('array')
result = a.indexOf(2)!==-1;
console.timeEnd('array')
console.time('set')
result = s.has(2)
console.timeEnd('set')

let ob1 = { id:1, name: 'abc'}
let ob2 = { id:2, name: 'xyz'}

s.add(ob1)
s.add(ob2)
console.log(s)

let m = new Map()
m.set


// demonstrate the map and set functions using various values
// performance b/w obj and map
// convert obj into map
//perform any set opertaions ( union , etc) 



