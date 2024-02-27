/* Data is categorized into two 2 on the basis of how its stored in memory and accessed*/

/*  Primitve (Non Primitive):- They are all call by value 
    //7 types :- String, number, boolean, null, undefined , Symbol(use to make value unique), bigInt,  


    Refrence types:- 
    // Array, objects , functions
*/


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)    // false as each symbol returns  unique altough value we have passed is same
console.log(id==anotherId)     // also false

const a=3465456415314654n   // will be taken as bigInt when we type n in last of the no.
console.log(a)
console.log(typeof a)       //bigint


/* Non primitive types  */

    const heroes=["shaktiman", "naagraj", "doga"]   // Array

    let myObj={                                     //Object 
        name:"ayush",
        age:21,
    }
    console.log(typeof myObj)   //object    


    const myFunction= function()
    {
        console.log("hello world")
    }

    console.log(typeof myFunction)   // function called as object function