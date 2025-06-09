//Immediately Invoked Function Expression (IIFE)

(function chai() {
  console.log("DB connected");
})();
// chai() // normal function call
// fisrt ():- function definition
// second ():- execution call like chai()
// iife:- to aviod pollution from global scobe we use iife function

// ( function chaiaurcode() {
//     console.log("DB connected two");

// }) ()                                 //throws error due to missing semicoon at the end

(function chaiaurcode() {
  //named iifi
  console.log("DB connected two");
})();


//unnamed iifi
(  () => {
  console.log("DB connected three");
})();

// parametered iifi
(  (name) => {
  console.log(`DB connected three ${name}`);
})("Ramseh");


//nested iifi :- while writing this care about semicolon

(()=>{
    (()=>{
        console.log("inner iifi");
        
    })();
    console.log("outer iifi");
    
})()

