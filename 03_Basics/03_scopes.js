/* let and const having block scope its good thing  */


if(true)
{
    let  a=10   // a scope will only be in that if block so unaccessible outside if block
    const b=20
    var c=30
}

console.log(a)   // a is not defined (it good thing )
console.log(b)  //  b is not defined (it also good thing )
console.log(c)   //  30  it should not be accessible here but its accessible