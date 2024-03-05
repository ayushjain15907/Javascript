// now object as conductor now it willl be a singlton

const user1=new Object()  // its a singlton object (eith the help of constructor)its empty same as when we ceate as literal

const user2={}  //as literal (its also empty object but its non single ton  )

/* we can assign value in this way in the object as conductor */
user1.name="ayush"
user1.age=21
console.log(user1)

/* we can assign value aslo in the same  way when we create object as literal */
user2.name="aniket"
user2.age=22
console.log(user2)

/* # Object can be nested many times */

const user3={
    fullname:{
        userfullname:{
            firstname:"ayush",
            lastname:"jain"
        }
    }
} 
console.log(user3.fullname.userfullname) // { firstname: 'ayush', lastname: 'jain' }
console.log(user3.fullname.userfullname.firstname) // ayush


// Topic:*-Merge arrays using naive, assign, spread method

//Naive method-

const usr1={
    name:"abhinav",
    age:20
}
const usr2={
    name:"mohit",
    age:21
}
const usr3={usr1,usr2}
console.log(usr3)
/*output- {
    usr1: { name: 'abhinav', age: 20 },
    usr2: { name: 'mohit', age: 21 }
} // but we dont want in such way the output so we try another method 
*/


/* ## Object.assign(target,source)=>there are two types of example 1st si that if we dont use {} as target and 
2nd is that when we use {}  as target 

Object.assign(target,source)- it merge the object if they have distinct properties
 if same property is there then it replace the target with source */

/*### 1st type examples -in this we dont use the {} as target so it replace the actual 
target array also in actual */

 // example 1. (i)
console.log("example 1. (i)")

const obj1={
    name:"rohan",
    age:21
}
const obj2={
    name:"sohan",
    age:22

}
const obj3=Object.assign(obj1,obj2)
console.log(obj3)      //{ name: 'sohan', age: 22 }
console.log(obj1)      //{ name: 'sohan', age: 22 }
console.log(obj2)      //{ name: 'sohan', age: 22 }



/* example 1. (ii)  */
console.log("example 1. (ii)")

const obj4={
    name:"ajay",
    age:23
}
const obj5={
    naam:"arman",  
    umr:24
}
const obj6=Object.assign(obj4,obj5)
console.log(obj6)  //{ name: 'ajay', age: 23, naam: 'arman', umr: 24 }
console.log(obj4)  //{ name: 'ajay', age: 23, naam: 'arman', umr: 24 }
console.log(obj5)  //{ naam: 'arman', umr: 24 }
  

/* example 1. (iii)  */
console.log("example 1. (iii)")

const obj7={
    name:"katrvik",
    roll_no:2820001
}
const obj8={
    name:"raja",  
    age:24
}
const obj9=Object.assign(obj7,obj8)
console.log(obj9)  //{ name: 'raja', roll_no: 2820001, age: 24 }
console.log(obj7)  //{ name: 'raja', roll_no: 2820001, age: 24 }
console.log(obj8)  //{ name: 'raja', age: 24 }


/*#### 2nd type examples- if we use {} as targer it will not modify the actual object 
on which operation is being applied   */

// example 2. (i)
console.log("example 2. (i)")

const obj11={
    name:"rohan",
    age:21
}
const obj12={
    name:"sohan",
    age:22

}
const obj13=Object.assign({},obj11,obj12)
console.log(obj13)      //{ name: 'sohan', age: 22 }
console.log(obj11)      //{ name: 'rohan', age: 21 }
console.log(obj12)      //{ name: 'sohan', age: 22 }

 
 
/* example 2. (ii)  */
console.log("example 2. (ii)")
 
const obj14={
    name:"ajay",
    age:23
}
const obj15={
    naam:"arman",  
    umr:24
}
const obj16=Object.assign({},obj14,obj15)
console.log(obj16)  //{ name: 'ajay', age: 23, naam: 'arman', umr: 24 }
console.log(obj14)  // { name: 'ajay', age: 23 }
console.log(obj15)  //{ naam: 'arman', umr: 24 }
  

/* example 2. (iii)  */
console.log("example 2. (iii)")

const obj17={
    name:"katrvik",
    roll_no:2820001
}
const obj18={
    name:"raja",  
    age:24
}
const obj19=Object.assign({},obj17,obj18)
console.log(obj19)   //{ name: 'raja', roll_no: 2820001, age: 24 }
console.log(obj17)   //{ name: 'katrvik', roll_no: 2820001 }
console.log(obj18)   //{ name: 'raja', age: 24 }

/*by spread method- this method also merge the distinct object like the assign method
 but it does snot affect the actual objects on which operation is beong applied*/

console.log("example of merging object by spread method")
const obj21={
    name:"prince",
    rollno:201
}
const obj22={
    name:"ajay",
    rollno:57854
}
const obj23={...obj21, ...obj22}
console.log(obj23) //{ name: 'ajay', rollno: 57854 }
console.log(obj21)
console.log(obj22)  


/* we receive the values in the form of array of objects  some this type below*/
/* its an array ob objects so we can access indivdual objects like an array
 elements*/ 

const users=[
    {
        id:2154,
        email:"ayu@gmail.com"

    },
    {
        id:2155,
        email:"ani@gmail.com"
    },
    {
        id:2156,
        email:"ajay@gmail.com"
    }
]

console.log(users[0])   //{ id: 2154, email: 'ayu@gmail.com' }
console.log(users[1].email) // ani@gmail.com

/* To know only the keys of an object we can write */
/* To know only the values of an object we can write */
/* to know key value in an array format use Object.entries(object_name) */

console.log(Object.keys(obj21))  // [ 'name', 'rollno' ]
console.log(Object.values(obj21))  // [ 'prince', 201 ]
console.log(Object.entries(obj21))  // [ [ 'name', 'prince' ], [ 'rollno', 201 ] ]

/* To check if a object has some property or not it return boolean value*/

console.log(obj21.hasOwnProperty('name'))   //true
console.log(obj21.hasOwnProperty('email'))   //false