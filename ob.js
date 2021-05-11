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