function test(x, y) 
{
  return ((x == 10 || y == 10) || (x + y == 10));
}
console.log(test(10, 10))
console.log(test(20, 10))
console.log(test(5, 5))
console.log(test(20, 30))