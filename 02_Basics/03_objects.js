/* objects can be made in two ways -1.as literals 2. as constructor there is no perfomance imrovements in these two
ways only difference is of singleton. constructor mei singleton 1 object bnta hai but  literals mei ni bnta.
singleton means single instance */

// 1st way -Object literals

const user1={
    name:"ayush",         // behind treated as "name"(in string form)  
    "full name":"haryana",    // we cant write full name only one syntax to fetch these type of value   
    age:"21",
    city:"Panipat",
    email:"ayush@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","wednesday"]
}   

/* ways to fetch data */

console.log(user1.email)
console.log(user1["email"])   // if we write inside square bracket then ""is mandatory to be write to access email
console.log(user1["full name"])  //its the only syntx to fetch full name 


/* # now see an exmaple of use symbol*/

const mySym= Symbol("key1")
const user2={
    name:"ayush",
    age:21,
  //  mySym:"myKey1"    its wrong way to use symnol it will work but as normal string
    [mySym]:"myKey1" // its correct way altough print as string but used as symbol in fact
}
// console.log(user2.mySym)   // its wrong syntax to print symbol
// console.log(typeof user2.mySym)   string 

console.log(user2[mySym])    //myKey1   // coorect way to fetch symbol
console.log(typeof user2[mySym])   // its also string but used as symbol

/* object.freeze()-if we want that no one can change object's value then we can freeze its value*/

//Object.freeze(user2)     // user 2 value is freezed
user2.name="aniket"   // gives no error but value will not change
console.log(user2) //  { name: 'ayush', age: 21, [Symbol()]: 'myKey1' }

//note:- ayush will be printed in name not aniket as user2 value is freezed   

/* ## adding a function to user1 */
user1.greeting=function(){
  console.log("Hello user")
}

user1.greetingTwo=function(){
  console.log(`hello ${this.name}`)  // we can write user1.name also but this refers to current object for which the function has been called 
}
console.log(user1.greeting)   // returns the function refrence
user1.greeting()   // Hello user

user1.greetingTwo()     // Hello ayush











