let score="33abc"


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)


// let score1=undefined
// let score2=null
// let score3="hitesh"
// let score4=true

// let valueInNumber1= Number(score1)
// console.log(typeof valueInNumber1)
// console.log(valueInNumber1)

// let valueInNumber2= Number(score2)
// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)

// let valueInNumber3= Number(score3)
// console.log(typeof valueInNumber3)
// console.log(valueInNumber3)

// let valueInNumber4= Number(score4)
// console.log(typeof valueInNumber4)
// console.log(valueInNumber4)

//"33" => 33
//"33abc" => NaN(Not a Number)
//true =>1
//false=> 0
//null => 0
//undefined =>NaN

let isLoggedIn=1
 let booleanIsLoggedIn=Boolean(isLoggedIn)
 console.log(isLoggedIn)

 // 0 => false
// 1 => true
// "" => false
// "abc" => true
// null => false
// undefined => false
// NaN => false

let someNumber=54
let stringNumber= String(someNumber)
console.log( stringNumber);
console.log(typeof stringNumber);


//*************operations******** 

let val =3
let negvalue= -val
console.log(negvalue); //-3

console.log(2+2) //4
console.log("2"+"2") //22
console.log("2"+2) //22
console.log(2**2) //4
console.log(2**4) //16
console.log(2-2) //0
console.log("2"*2) //4
console.log(2/3) //0.6666666666666666

let str1="Hello "
let str2="Nirmalya"
let str3=str1+str2
console.log(str3) //Hello Nirmalya

console.log("1" - 2) //-1
console.log("1" + 2) //12
console.log("1" +2 +2) //122
console.log(1+2+"2") //32
console.log(1+2+"2" + 4) //324 
 

console.log(+true)
console.log(true+2)

console.log(+false)
console.log(+"")

let gameCounter=100
gameCounter++
console.log(gameCounter)//101 
++gameCounter
console.log(gameCounter)//102