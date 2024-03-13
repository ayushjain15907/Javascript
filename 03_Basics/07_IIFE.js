// IIFE -Immediately involked function expressions- its the function which calls immediately itself 
// IMPORTANCE- to prevent from pollution from global scope


/*SYNTAX To write IIFE  with normal function just enclose whole function in () and at last do write ()to execute it*/

/*its a named IIFE - because we have write function name hello in arrow function there is unnamed IIFE*/
(function hello(){
    console.log("this is normal IIFE function ")
})();

// NOTE:- semicolom is must after IIFE

/*SYNTAX To write IIFE  with arrow function just enclose function in () but not  and at last do write ()to execute it*/

const fun=(()=>{
    console.log("this is IIFE arrow function with name ")
})();



/* SYNTAX to write IIFE with arrow function without any name i think there is no arrow function without any name 
but here the function is involked immediately itself so we can write arrow function without name  */ 

(()=>{
    console.log("this is a IIFE arrow function without name ")
})();

/* Passing parameters in IIFE arrow function without any name */

((name)=>{
    console.log(`hello ${name}`)
})('Ayush');

