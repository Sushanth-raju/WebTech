// object literal
let car = {
    color : 'red',
    year : 2020,
    display : function()
    {
        console.log( `the car is ${this.color} in color and purchased in the year ${this.year}`)
}
}

car.display()

// 2. object instance
let person = new Object();
person.age = 45
person.name = 'abc'
person.display = function()
{
    console.log(`My name is ${this.name}`)
}

person.display()

// 3. Constructor function

function emp(fname,lname,sal)
{
    this.fname = fname;
    this.lname = lname;
    this.sal = sal;

    this.display = display1;
    }
    function display1(){
        console.log(`Name is ${this.fname} ${this.lname}`)

}
let e = new emp('Raja', 'ram', 34990)
e.display()

// compare objects

let fruit = {
    name: 'apple'
}

let f = fruit;
{
    name: 'apple'
}

console.log(fruit === f)

// this --- old js

let person1 = {
    name: 'abs', 
    age:29,
    sayDetails: function()
    {
        console.log('name is ' +this.name + 'age is ' +this.age)
        sayAgain = function()
        {
            console.log('name is ' +this.name + ' age is ' +this.age) 
        }
        sayAgain()
    }
}
person1.sayDetails()

// getter -> gets the value of particular property
// setter method -> setting the value of particular property

var obj ={
    a:7,

    get b(){
        return this.a+1;
    },

    set c(x)
    {
        this.a = x/2;
    }
}

console.log(obj.a,obj.b)
obj.c = 50
console.log(obj.a,obj.b)

