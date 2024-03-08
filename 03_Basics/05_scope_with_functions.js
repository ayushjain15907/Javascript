function one(){
    const username="ayush"
    console.log("parent function running")
    function two()
    {
        const site="youtube"
        console.log(username)  //ayush
  //      one()  //two  function can access the one's  variables and as well as call one function also
        
    }

 //   console.log(site)  // site is not defined (which is good) because const is having block scope
   two()  // one unction can obviously call to two function
}

one()


// +++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++
// Types of functions

console.log(addOne(5))  // its suitable function addOne will be called either its written before function defintion or after definition
function addOne(value)
{
    return value+1
}

/* console.log(addTwo(4))  -it will give error because addTwo() function defined after it and its as variable
so we can call this type of function only after its definition*/
 
const addTwo=function(val)    // as variable
{
    return val+2
}
console.log(addTwo(5))  // yes we can call in this way after definition we can call variable type function