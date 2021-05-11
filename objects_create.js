// 1. Object Literal - object initializer

let emp = {
    name: 'abc',
    id : 123,
    sal:2300
}
console.log(emp)

// 2. using object instance - default object constructor

let person = new Object()
person.name = 'sushanth' 
person.age = 20

console.log(person)

// 3. Constructor function - user defined constructor function

function car(year,model,name)
{
    this.year = year;
    this.model = model;
    this.name = name;

}

let myCar = new car(2019,'abc1','Tesla')
console.log(myCar)

// 4. creating objects withim objects

let car1 = {
    color: 'red',
    wheels : 4,
    year : 2020,
    engine :{
        cylinders : 4,
        size: 2.2,
        model : 'v8'
    }
}

console.log(car1.engine.model)

// 5. Using constructor function

function car2(color,wheels,year,etype){
    this.color = color;
    this.year=year;
    this.wheels = wheels;
    this.etype = engine2;

}

function engine2(cylinders,size,model){
    this.cylinders = cylinders;
    this.size = size;
    this.model = model;

}
let myCar2 = new car2('red',4,2019)
let myEngine2 = new engine2(4,2.2,'v8')
console.log(myCar2)
console.log(myEngine2)




function planets(distance,inclination,elements,size){
    this.distance = distance;
     this.inclination=inclination;
     this.elements = elements;
     this.size = size;

   }
    let earth = new planets('151.06 million km', '23.50 degrees', 'air ,fire , water',6371 )
    //document.write(earth);
    console.log(earth)