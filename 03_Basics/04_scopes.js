/* var is not having block scope which should be   so avoid var*/
/* let and const having block scope its good thing  */

let a =100
var c=300
if(true)
{
    let  a=10   // a scope will only be in that if block so unaccessible outside if block
    const b=20
    var c=30    // it changes the value of gloablly c which is 300 so final value of c is 30 (its not good)
    console.log(a) // 10 its good thing because in this if block ak is 10
}

console.log(a)   // 100 // its true because a is 10 only inside if block but outside gloablly its 100
// console.log(b)  //  b is not defined (it also good thing )
console.log(c)   //  30  value changes to 30 but it should be 300 so we can sy var is not having block scope which is bad 


/* conclusion :- let and const is good var is not good totally  so avoid var*/