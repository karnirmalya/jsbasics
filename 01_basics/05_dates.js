// DATE
/*
let myDate = new Date();
console.log(myDate)

console.log(myDate.toString()) //date,day ,time

console.log(myDate.toDateString()) //date and day

console.log(myDate.toISOString()) //same output as "myDate"

console.log(myDate.toJSON()) //same output as "myDate"

console.log(myDate.toLocaleDateString()) //give date in format dd/mm/yyyy

console.log(myDate.toLocaleString()) //give date in format dd/mm/yyyy along with time in hh:mm:ss am/pm

console.log(myDate.toLocaleTimeString()) // give time in the format of hh:mm:ss am/pm

console.log(myDate.toTimeString()) //give time in the format of hh:mm:ss along with timezone

console.log(typeof myDate)

*/
// let myCreatedDate =new Date(2023,0,23)
// let myCreatedDate =new Date(2023,0,23,5,3)
//  let myCreatedDate =new Date("2023-01-23")
 let myCreatedDate =new Date("01-14-2023") //mm-dd-yyyy
console.log(myCreatedDate.toLocaleDateString())


// let myTimeStamp=Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getDay()+1);
console.log(newDate.getMonth()+1);

console.log(
    newDate.toLocaleString('default',{
    weekday:"long",
}))


