function Animal(name,nature){
    this.name = name || '';
    this.nature = nature || 'wild';
}

function Animal1(name,nature,size)

{   
  
   Animal.call(this,name,nature)
    this.size = size || [];
    
}

function Animal2(name,nature,size,legs)
{
        Animal.call(this,name,nature,size)
        this.legs = legs ;
    }



let op = new Animal2('dog','wild',['24','36'],'four legged');
console.log(op);