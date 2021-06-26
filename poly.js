class Animal{
    constructor(name){
        this.name = name ;

    }
    makeSound(){
        console.log("Generic animal sound")
    }
}


class Dog extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        console.log("Dog is Barking")
    }
}

const a1 = new Animal()
a1.makeSound()

const a2 = new Dog()
a2.makeSound()
