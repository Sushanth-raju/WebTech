var add = function(a,b)
{
    a = a || 0
    b = b ||0
    return (a+b)
}

var sum = add(4,9)
console.log(sum)

//ES6 -- Arrow functions
const mutl = (c=1,d=1) => { return(c*d) }

result = add(7,4) + mutl(4,3)*2
console.log(result)