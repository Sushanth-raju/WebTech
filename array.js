let colors = ["red","black","orange","pink"]

let age = [3,5,23,54,52,24,18]

let ar = ["tiger",83,"lion",23]

//-- colors.forEach((product,index) =>{ console.log(`At index ${index} is the color ${product}`)})

//colors.forEach((product,index,ar) =>{ 
     //  ar[index]= `At index ${index} is the color ${product}`})

       //--console.log(colors)

// map function

//const newColor = colors.map(item => {return item+ "new"})

//const filterList = age.filter(item => item>18)

const filterList = ar.filter(item => isNaN(item))
console.log(filterList)