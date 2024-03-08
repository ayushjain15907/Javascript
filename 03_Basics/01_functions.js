/* TOPIC:- simple function with how to set  default value  of its parameter  */

// A simple function
function myName(){
    console.log("ayush")
}

myName()


//  function to print sum of two numbers 

function printSum(n1,n2)  // n1,n2 are parameters
{
    console.log(n1+n2)
}
printSum(3,4)   // 3,4 are arguments


// function that returns the sum of two numbers

function returnSum(n1,n2){
    return (n1+n2)
}

const result=returnSum(10,20)
console.log(result)


// function to print login user message

function loginUserMessage(username="No one ")// No one is  default value of username  when we will not pass anything to it
{
    /* if(!username) we can write this also instead of below because undefined is false and we are doing its not 
    so when undefined comes it do it not means true and then  if block will run  */

    if(username===undefined)  
    {
        console.log("Please enter username")
        return
    }
    return `${username}just logged in`
}

const msg=loginUserMessage()  // if we pass nothing then undefined will come as username 
console.log(msg)


