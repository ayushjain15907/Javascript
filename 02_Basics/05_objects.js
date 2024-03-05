/* Topic:- Object Destructure */

const course={
    courseName:"javascript",
    coursePrice:999,
    courseInstructor:"hitesh"
}

/*if we have to fetch value course.courseInstructor from this object again and again so we can do this in 
short and give it alias according to our own*/

const {courseInstructor}=course
//now we can simple write ciurseInstructor to fetch course.courseInstructor

/* we can give it alias also if we think courseInstructor is also big to write */
const {courseInstructor:CI}=course
//now we can fetch this value only by writing CI so lets check

console.log(CI)    // hitesh



/* TOPIC :- something about API

/* we receive some values from the backend. early time it comes in xml structure which is complex but 
now it comes in json form its just a object having no name. now API values can come from backend in 
2 forms 1st as objects and 2nd as array of objects so we have to take them and use them by looping 
and other method */

/* 1st way  when API value received as object  

{
    "name":"ayush",    // always write in "" , 26 is number and false is another data type so not in ""
    "age":26,
    "isLoggedIn":false     
}
*/
 
/* 2nd way when API values received as array of objects 

[
    {},
    {},
    {}
]

*/




