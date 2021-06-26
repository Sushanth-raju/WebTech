
function main(a) {
  
 var counter = a;
 var sub = function() {
   console.log(counter++);
   counter++;
 };
 return sub;
}

var x = main(10); 
x();
x();
x();

