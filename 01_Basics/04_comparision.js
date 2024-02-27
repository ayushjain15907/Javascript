/* there is automatic type conversion from string to int but not the good way to use this*/

console.log("2">1)     // true
console.log("1"> 2)    //false  

console.log(null>0)     //false 
console.log(null==0)    //false
console.log(null>=0)    //true    (its problem)

console.log(undefined>0)     //false 
console.log(undefined==0)    //false
console.log(undefined>=0)    //false

/*  # NOTE we use strict check in strict check there is checking of data type also */
// Strict check is done by === 

console.log("2" == 2);   // true
console.log("2" === 2);   // false