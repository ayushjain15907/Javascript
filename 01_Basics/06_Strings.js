const name="ayush"
const age=21

 // This method is not good
console.log("my name is "+name+" age is "+age)  

// #This method is good and preffered 
console.log(`my name is ${name} age is ${age}`) 


// ##Another way to make string by using new keyword
const userName=new String('Ayush')
console.log(userName)          // String: Ayush

// ###  some strings method
// we can fetch particular index character of string like array 
console.log(userName[0])     // A   

console.log(userName.length)   // 5

console.log(userName.toUpperCase())    // AYUSH  (to convert into upper case)

console.log(userName.charAt(4))       // h     (to know he charcter at spefic index)

console.log(userName.indexOf('A'))       // 0  (tell the first occuring index of specific character)

// console.log(userName.substring(0,4))   //Ayu  (tell the substring occuring bw including 0 but excluding 3 


/* in slice method we can give negative value at starting index - value represent startting from last .
-1 reprsent the last character as like 0 represents the first character   in this also lastIndex is excluded   */
console.log(userName.slice(-4,-1))    // yus


/* trim method removes the extra whitespaces at beg and last of the string  */
const yourName="    aniket     ";
console.log(yourName)          // ___aniket____
console.log(yourName.trim())   // aniket

// NOTE:- trimStart() method remove extra white space from beigining only 
// NOTE:- trimEnd() method remove extra whitespaces fro tnhe end only 

/* replace method replace the given string with specified one*/
const url="ayush%20jain@google.com"
console.log(url.replace('%20','-'))    // ayush-jain@google.com

/* includes method returns true or false on the basis of weather specified substring is present in the given string o not */
console.log(url.includes('google'))   // true
console.log(url.includes('yahoo')) // false


/* split() method return array of the string after spliting based o the specified character*/

const fav="icecream-pizza-burger"
const arr=fav.split('-')   // array will be returned that will be stored in arr
console.log(arr)
console.log(fav.split('-'))  // we can directly also print returned array


