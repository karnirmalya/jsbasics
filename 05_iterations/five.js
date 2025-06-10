const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

//arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

//  Function Explicitly defined
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //only reference passed

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//Array of objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName , ":- " , item.languageFileName);
   
} )