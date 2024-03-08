/* TOPIC:- This and arrow function  */

/* context- its the current values at partcular time*/
/* this - this is a keyword reffers to current context */
// inside the object this prints the current contexts but inside function it does not print current contexts

const user={
    username:"ayush",
    price:999,
    welcomeMessage:function(){
        console.log(this)  // print current username, price and welcomeMessage: [Function: welcomeMessage]
        console.log(`Hey, Welcome ${this.username} `)
    }
}

user.welcomeMessage()   // Hey, Welcome ayush
user.username="aniket"
user.welcomeMessage()   //Hey, Welcome aniket

console.log(this)   //  {}  its the emmpty object because globally there is no context in the node environnment
// NOTE:- but when we do this same in the browser then thehre window Object something will be printed 


function hello(){
    let username="ayush"
    console.log(this)  // Print many things
    console.log(this.username) //undefined  so its important inside fncn we are not able to use this to fetch values
}
console.log("hello function will run now")
hello()

// NOTE:- in the node environment when we do console.log(this) inside a fncn then there are many values
// But we can not fetch values like that this.username inside a function

const hello1=function(){
    let username="aniket"
    console.log(this)   //// Print many things
    console.log(this.username)  // undefined   here also undefined comes
}
console.log("hello1 function will run now")
hello1()


/* Now arrow function   */
// in arrow function if we print this then empty object will come but in normal function many things is printed

const hello2=() =>{
    let username="ajay"
    console.log(this)    // HERE {} this is the output (empty object) 
    console.log(this.username)
}
console.log("hello2 function will run now")
hello2()   // undefined here also undefined comes in the arrow function


/* Now understand arrow function*/  
// 2 types of arrrow function 1st is basic arrow function and 2nd is implicit return arrow function

/*  1. basic arrow function - in this type we have to write return keyword and function in defined inside {} */
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))  //7 

/* 2.implict return arrow function- in this type we dont define the function inside curly braces and dont need 
to wrotie return keyword just write return statement in the same line*/
const addThree=(n1,n2,n3)=>  n1+n2+n3

//Note :- this syntax is not preffered because if we have to return object then this method will create error
// because we have to write object in {} then its will demand for write the return statement it will become basic 
// arrow function
console.log(addThree(10,20,30))  //60

/* another good syntax*/

const addFour=(n1,n2,n3,n4)=> (n1+n2+n3+n4)
console.log(addFour(1,2,3,4))  //10
// NOw in this way we can return object easily

const fun=()=> ({username:"ayush",age:19})   // returning the object
console.log(fun())   //output - { username: 'ayush', age: 19 }



