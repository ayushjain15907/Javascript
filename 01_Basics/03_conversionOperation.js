let score =null

console.log(typeof(score))          // string 

// # To convert from anything to Number
let valueInNumber=Number(score)     

console.log(typeof(valueInNumber))   // number

console.log(valueInNumber)
/* when converted from ___to Number    */

// "33"(string)=> 33 (number)
// "33abc"(string)=> NaN(number)
// true(boolean)=> 1 (number)
// false(boolean)=> 0
// undefined (undefined )=> NaN(number)
// null(object) => 0(number)

// NaN stands for not a number but its type if we check is a number


// ## To convert from anything to Boolean

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)
console.log(typeof(booleanIsLoggedIn))

// ""(string)=>false in the boolean   (empty string give false in boolean)
// "ayush" => true in the boolean


// ### similary we can do of string 

let age=13
let ageInString=String(age)
console.log(typeof(ageInString))   //string

/* some tricky things */
// string +number =string
// string + number + number =>string + number=> string

console.log("1"+2)   //12
console.log(1+"2")   //12   
console.log(1+2+"2") //32 
console.log("1"+2+2)  //12
