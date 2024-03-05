// array 
/* Shallow copy = pasing refrence */

//# way to declare array
const arr1=[10,20,30,40,50]   // declared in the square brackets 
const names=["ayush", "aniket","ajay"]
// Note :- javascript arrays are resizable 

/*## Another way to declare array*/
const arr2=new Array(5,10,15,20,25)

console.log(arr1[0])   // to print 1st element in the array
console.log(arr1)      // to print the whole array 
console.log(arr2)

//###Array contain different type of values in the same array
const arr3=[10,20,"ayush", true , 12.5]
console.log(arr3)
 
// ####Array properties and methods

console.log(`length is ${arr3.length}`)  // to know the length

arr3.push(30)    // to push into the array
console.log(arr3)

arr3.pop()
console.log(arr3)    // to pop the last value from the array

arr3.unshift("aniket")    // to push in the front of the arrray(multiple values can also be given)(it may be time consuminig for large size of arrays due to shift operations)
console.log(arr3)

arr3.shift()       // to pop the 1st value from the array(no argument is needed)
console.log(arr3)

/* ##### some array question ans methods */

console.log(arr3.includes(20))  // returns true of false on basis of given element present or not

console.log(arr3.indexOf(20))  // to know the index of specified element

const newArr=arr3.join()   // join returns the array in the string type
console.log(typeof arr3)  // object
console.log(typeof newArr)  // string 


//######  slice and splice method

/* slice method- returns the specified portion of the array in which from inclusive but to is exclusive and 
main point is that is does not affect the original array  */

/* splice method- retuns the specified portion of the array both range is inclusive here and main point is that 
it also affect the original array it removes the specified portion from the org array.*/

const arr4=[10,20,30,40,50,60]
const arr41=arr4.slice(1,3)  // 1 inclusive but 3 exclusive
console.log(`Sliced array is ${arr41}`)
console.log(`original array is ${arr4}`)

const arr42=arr4.splice(1,3)  // both inclusive
console.log(`Spliced array is ${arr42}`)
console.log(`original array is ${arr4}`)  // specified portion removed from original array








