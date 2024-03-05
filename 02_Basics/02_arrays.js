const siblings=["ayush","aniket","ayushi"]
const frnds=["ajay","arman","deepak","abhinav"]

/* # push() method  */
siblings.push(frnds)  // push whole array frnds at last as a single element in the siblings array
console.log(siblings) 
/* this is not a good syntax*/
console.log(siblings[3][2]) // to fetch a single elemnt from the last element which is (frnd array) of sibling array 


/* concat()  method - it will return a array which would be array after concatenate every single element separately in the array*/

const arr1=[10,20]
const arr2=[30,40]
const arr3=arr1.concat(arr2)    
console.log(arr3)

/*  spread method()- same as it is like concat only syntax difference is there */

const arr4=[...arr1, ...arr2]
console.log(arr4)

/* flat method()-- returns the every elemnt in depth recusrsviely so to handle those kind of situation
 for eg in an array we have another sub arrays but if we have to print each elemnt spearately then we can use this*/

 const arr5=[10,20,30,[40,50],60,70,[80,90]]

 console.log(arr5)   //    [10,20,30,[40,50],60,70,[80,90]]
/* but we dont want like this so we can use flat method here but 
IMPORTANT NOTE:- this problem can be solved by using consoling in the backticks (``)it will automattically will print 
in separately   */
const arr51=arr5.flat(Infinity)
console.log(arr51)         /*  [
                            10, 20, 30, 40, 50,
                            60, 70, 80, 90  
                            ]  */

console.log(`arr5 is ${arr5}`)

/* ####### Array.of()-  to convert the set of elemnts into the array */

const name1="ayush"
const name2="aniket"
const name3="ajay"
console.log(Array.of(name1,name2,name3))   // [ 'ayush', 'aniket', 'ajay' ]
console.log(Array.of(1,2,3,4,5))           // [ 1, 2, 3, 4, 5 ]

/* ## Array.from()- to convert a single element into the array*/
//Note:-  if key value pair is given then it will return empty array if its unable to make then its return empty array
const name4="ayush"
console.log(Array.from(name4))   // [ 'a', 'y', 'u', 's', 'h' ]  (we can pass directly the string also "ayush")


