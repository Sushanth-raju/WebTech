/*function C(){
    C.prototype.meth1 = function(){
        console.log("this is c")
    }
}

// _proto_ default object name



let c1 = new C()
c1.meth1()
*/

class D{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }

    meth(){
     console.log("yo yo yo whatsup biatch")       
    }

    
    static compare(a,b){
        return a.age==b.age
    }
    static prop = 78;
}

class C extends D{
    constructor(name,age,area){ // setup the object
        //instance properties -
        super(name,age)
        this.area = area;

        //console.log("ur n cls")
    }
        //instance methods
        
        meth(){
            console.log("I am the Danger")       
           }
    // static methods 

}
let c1 = new C('Breaking',20,'Alberqueki')
let d1 = new D('jesse',21)

//c1.__proto___= D
console.log(c1)
console.log(d1)
d1.meth()
c1.meth()
console.log(D.compare(c1,c1))
console.log(D.prop)