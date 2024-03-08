/*Topic:- Rest operator Usage ,  passing object through function , passing array through function  */


/* #Rest operator :- ()...nums) this ... operator used as rest and spread both at diff place now its used as 
rest operator and this is used when we dont know the no. of arguemnt will be passed while calling the function
then we use this it will create the array of all values and names it whatever we write after ... */


function calculateCartPrice(...nums)
{
    let total=0
    for(i=0;i<nums.length;i++)
    {
        total=total+nums[i]
    }
    console.log(total)
}

calculateCartPrice(10,20,30)

/*IMPORTANT:- we can write function calculateCartPrice(val1, val2, ...nums)
then 1st and 2nd value will be  in the val1 and val2 respectively and next values comes in the nums array */


/* ## passing object through function */

function handleObject(obj)
{
    console.log(`Username is ${obj.username} and the age is ${obj.age}`)
}

const user1={
    username:"ayush",
    age:21
}
handleObject(user1)

/* we can pass argument in another way also*/

handleObject({username:"aniket", age:22})

/* Passing array through function  */

function printArray(nums)
{
    console.log("The array is: ",nums)
}

const arr=[10,20,30,40]
printArray(arr)

/* we can pass aray in this way also */
printArray([1,2,3,4,5])

