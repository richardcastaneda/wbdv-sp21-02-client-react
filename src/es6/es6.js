let myInteger = 123
let myString = "QWE"
let someObject = {
  objectProperty1: {
    anotherProperty : {q:111, W:222},
    anotherProperty2: [321,432,543]
  }
}
console.log(
  someObject.objectProperty1.anotherProperty2[2],
  someObject["objectProperty1"].anotherProperty2[2]
)

// Only aplicable if you have a return statement and nothing else.
const addEs6 = (a, b) => a + b


const ewq = addEs6(3,2)
console.log(ewq)

//Single argument alternate syntax
//const sqr = (b) => b * b (the old way of writing it with one argument)
//lambra/embedded/anonymous functions are easier to write
//functions can take many arguments, but you dont have to pass all arguments
//functions can have default arguments as well.
const sqr = b => b * b

const square = sqr(9)
console.log(square)

//Keyword this is always in the narrowest scope that you are in.
//Within the instance of what you are working.
//In java this always points to the isntance of the class, that is the same
//in es6 but not es5.

//filter function
let all = [1,2,3,4,5,6,7,8,9,10]
//shortned function writing arrow function within the parenthesis
let even = all.filter(i => i % 2 === 0)
/*let even - allfilter(i) => {
return i % 2 === 0
}*/
let odd = all.filter(i => i % 2 !== 0)
console.log(all, even, odd)

//Mapping
//Iterates over an array and calls a function or each element

let all2 = [1,2,3,4]
let square2 = all2.map(i => i * i)
console.log(all2, square2)

//Find & Filter Find returns the first elemnts that meets the bool

let array = [1,3,4,2,5]
array.find(x => x > 3) // return the first element that meets the critera
array.findIndex(x => x > 3) //REturns the index of the element that meets the critera
array.filter(x => x > 3) // returns all elemtns that meet the critera

//Using interpolation instead of concatenation interpolation = mail merge

//Array Matching Destructing
var list = [1,2,3]
var [a,,b] = list //a takes value from list, skip, b takes third elemnt from list
[b, a] = [a, b]