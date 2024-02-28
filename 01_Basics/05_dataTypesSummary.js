/* Data is categorized into two 2 on the basis of how its stored in memory and accessed*/

/*  Primitve (Non Primitive):- They are all call by value 
    //7 types :- String, number, boolean, null, undefined , Symbol(use to make value unique), bigInt,  


    Refrence types:- 
    // Array, objects , functions
*/


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)    // false as each symbol returns unique altough value we have passed is same in both
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


    const myFunction= function()//function can be treated as variable function in javascript we stored fncn in a var
    {
        console.log("hello world")
    }

    console.log(typeof myFunction)   // function called as object function

/*   ******************************************************** */

/* Memory usage in different datat types

Stack - for primitive datat types
heap- for refrence data types
 
Stack memory=> whenever stack memory is used then a copy is made availble to us, not the refrence of original value

Heap memory=> whenevr heap memory ig given to a data type then the original refrence is made availble to us so if 
we change then this change would be done at original place  */


/* Stack memory example for primitive data type  */
let naam="ayush"
let anotherName=naam      //its primitive data type so the value was passed not the refrence
console.log(anotherName)

/* heap memory example for the non primitive data type  */
let user1={
    name:"ayush",
    roll_no:2820191,
}
let user2=user1;
user2.name="aniket"
console.log("user1 name is ",user1.name)  // user1 name is hanged as the refreced of user1 is passed to user2 not thew copy




