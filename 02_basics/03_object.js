

// const tinderUser = new Object() //singleton object
const tinderUser = {} //nonsingleton object
// console.log(tinderUser)

tinderUser.id = "1234wbh"
tinderUser.name="shibnai"
tinderUser.isLoggedIn=false

console.log(tinderUser)


const regularUser = {
    email: "raju321fer@gmail.com",
    full_name: {
          userFullName:{
            firstName:"Nirmalya",
            lastName:"Kar"
          }
    }
}

// console.log(regularUser.full_name?.userFullName.firstName);

const obj1 ={
    1:"a",
    2:"b"
}
const obj2={
    3:"c" , 4:"d"
}
const obj3={ 5:"e",6:"f"}
// const obj3 = Object.assign(obj1,obj2)
// const obj4= Object.assign({},obj1,obj2,obj3)
// const obj4= Object.assign(obj1,obj2,obj3)
// console.log(obj4);
// console.log(obj1);

// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

//array of objects
const users=[
    {
        id:1,
        email:"hut@email.com"
    },
    {
        id:2,
        email : "cold@gmail.com"
    }
]
    
// console.log(users[0].id)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename: "JS in hindi",
    price:999,
    courseInstructor:"Hitesh"

}
// console.log(course.courseInstructor)

const {courseInstructor:Instructor}=course //destructuring object

console.log(Instructor);

//REACT SYNTAX
// const navbar = ({company}) =>{

// }

// navbar(company="Hitesh")

//API 
//JSON
// {
//   "name":"Hitesh",
//   "courseName":"JS in Hindi",
//   "price":"free"
// }
//API as array of objects
// [
//     {},
//     {},
//     {}
// ]

