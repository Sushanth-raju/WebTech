class Stack {
    constructor() {
        this.items = [];
    }
    add(item) {
        return this.items.push(item);
    }
     remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
   isEmpty(){
       return this.items.length == 0;
    }
   
    size1(){
        return this.items.length;
    }
 
     clear(){
        this.items = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);

stack.remove();
console.log(stack.items);
console.log(stack.isEmpty());
console.log(stack.size1());

stack.clear();
console.log(stack.items);