let myDate=new Date()
console.log(myDate)              //  2024-03-02T10:45:25.889Z
console.log(myDate.getMonth()+1)  // +1 bcoz mnth starting from 0 
console.log(myDate.getDay())     // returns 0 for sunday ........and so on 
console.log(myDate.toString());  /*   Sat Mar 02 2024 16:15:25 GMT+0530 (India Standard Time)*/
console.log(myDate.toDateString());    //  Sat Mar 02 2024
console.log(myDate.toLocaleString());  //  2/3/2024, 4:15:25 pm

// to create our specific date
let myCreatedDate=new Date(2023,0,23,15,3)      // YYYY,MM,DD,hour,minute month starting from 0 
console.log(myCreatedDate.toLocaleString());  // 23/1/2023, 3:03:00 pm

let myDate1=new Date("01-15-2024")     // MM-DD-YYYY
console.log(myDate1.toLocaleString()); // 15/-/2024, 12:00:00am


// Timestamps (used in polls who is winner etc...)
let myTimeStamp=Date.now()  // return milisecond value from 1 jan 1970 to till now
console.log(myTimeStamp)  // 1709414690287 (it will change at every miliseocnd)
console.log(myDate1.getTime())  // getTime() returns the milisconds from 1 jan 1970 to specified date

/* to get in seconds Date.now() */
console.log(Math.floor(Date.now()/1000))
 

/* we can customize the date also */
const newDate=new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})