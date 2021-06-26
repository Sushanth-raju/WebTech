// 1. demonstrate the map and set functions using various values
let mySet = new Set()
let cars = new Set(['HYUNDAI', 'MARUTHI' , 'HONDA', {"BMW" : "X5" },{"MERC" : "C-CLASS" },{"BUGATI" : "CHIRON" }])

// various set display options
console.log(cars)
console.log(cars.values())
console.log(cars.keys())
console.log(cars.entries())

// To delete and clear values 

if(cars.has('HONDA')){
    cars.delete('HONDA')}
else {
    cars.clear()}
console.log(cars)

// To add value into the set and to dispay its size
cars.add('GT-R')
console.log(cars.size)

// converting set into am array

let bikes = new Set(['BMW', 'DUCATI', 'KTM', 'TRIUMPH'])
console.log(bikes)

// converting array into a set
let val1 = [...bikes]               
console.log(val1)

// To remove duplicate elemets from array

let val2 = ['BMW', 'DUCATI', 'KTM', 'TRIUMPH', 'BMW', 'DUCATI', 'KTM', 'TRIUMPH']

console.log(val2)
let val2Set = Array.from(new Set(val2))
console.log(val2Set)


// Performance Efficinecy for Set and Array


let a =[] , s = new Set()
let b = [1,2,3,4,5,6,7,8,9]

for(let i =0; i<b.length ; i++)
{
    console.time('array')
    a.push(b[i])
    console.timeEnd('array')
   
    console.time('set')
     s.add(b[i])
     console.timeEnd('set')
}

let output ;
console.time('array-1')
output = a.indexOf(2)!==-1;
console.timeEnd('array-1')
console.time('set-1')
output = s.has(2)
console.timeEnd('set-1')

// maps

//MAP OPERATIONS

let cars = new Map()
cars.set('BMW','AUDI')
cars.set('jaguar','ford');
console.log(cars)

// Various display options

val = cars.entries()
console.log(val)
console.log(cars.keys())
console.log(cars.values())

// To determine size
console.log('No. of cars : '+cars.size)

// To find a particular value 
console.log(cars.get('BMW'))
console.log(cars.has('AUDI'))
 
// to delete any value

 cars.delete('ford')
 console.log(cars)

let a =cars.values()
console.log(a)

for(let [key,value] of cars)
{
    console.log(key+ ' performance is better than ' + value)
}

//

// Converting object to map

let ob1 = {
    id: '1',
    name: 'sushanth',
    place: 'blore'
}

mapcreation(ob1)
function mapcreation(ob1){
    let map = new Map()
    Object.keys(ob1).forEach(key=>{
        map.set(key,ob1[key]);
    });
    console.log(map)
    console.log(map.entries())
}

// Converting map into array

const map = new Map()
map.set('sushanth',20)
map.set('raju',21)
console.log(map)

let array = Array.from(map)
console.log(array)

// Performance analysis of map and array'
console.time('Map')
map.forEach((value,key)=>{
    console.log(key,value)
});

console.timeEnd('Map')
let a = ['name', 'place','id']
console.time('Array')
a.forEach(item=>{
    console.log(item)
})
console.timeEnd('Array')

//

//map

let cars1 = new Map()
let cars2 = new Map()
cars1.set('BMW','AUDI')
cars2.set('jaguar','ford');

// concatenation of two maps
let map = new Map([...cars1].concat([...cars2]))
console.log(map)

// union of 2 sets

let set1 = new Set([1,2,3])
let set2 = new Set(['a','b','c'])
let set = new Set([...set1,...set2])
console.log(set)


