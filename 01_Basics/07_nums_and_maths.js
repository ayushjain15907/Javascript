const score = 40 //qutomatically defined that is no.

/* we can define ourselfves that it must be a number */

const balance = new Number(100)
console.log(balance)   //[Number: 100]
console.log(typeof(balance))

// there is some method and properties for number like to convert into string
console.log(balance.toString())  //100 its a string 
console.log(balance.toString().length)   // here it converted dynmicaly not permanently so length is printed of the string but actual Number is not converted into string
console.log(balance)
console.log(typeof(balance))
console.log(balance);

// toFixed(to set the no of digits after decimal)
console.log(balance.toFixed(2))

// toPrecision()   give precisied value upto specified number
const number=23.8966
console.log(number.toPrecision(3)) // 23.9 returns a string containing number  /

const otherNo=123.97854
console.log(otherNo.toPrecision(3))  //124

//toLocaleString(country name type) returns commas string that is readable acc to india or another country we can specify
const num1=1000000
console.log(num1.toLocaleString('en-IN'));  //10,00,000

//*******MATHS********** */

// Math.abs(-ve value ) too convert -to to +ve only
console.log(Math.abs(-4))  //4

// Math.round(number ) to round off the CSSMathValue
console.log(Math.round(4.5));  //5

//Math.ceil (returns top value if even litte bit greater than 4 then return 5)
console.log(Math.ceil(  4.2))  //5

// Math.floor(opposite of ceil)
console.log(Math.floor(4.9))  //4

// Math.max() and Math.min()
console.log(Math.max(1,2,3,4,50))
console.log(Math.min(1,2,3,4,5))

// math.random() //return random value bw 0 and 1 mostly demcial value
//0.004 also can be generated so to avoid this we can do +1 after multiply the no by max range 
 // let for example we have to genearete random no bw 10 and 20 both inclusive then 
let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)



