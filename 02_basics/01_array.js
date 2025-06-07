//array 

const myArr = [ 0,1,2,3,4,5,6]

const myHeros=["Ironman","Hulk","Dr. strange","spiderman"]

const myArr2 = new Array(2,3,4,5,6,34,23)

//Array Methods

// myArr.push(98)
// console.log(myArr)

// myArr.pop()
// console.log(myArr);

// myArr.unshift(91) //adds element at starting
// console.log(myArr);

// myArr.shift()  //removes elemnt at ending
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice , splice

// console.log("A ",myArr);
// const myn1 = myArr.slice(1,4)
// console.log(myn1);
// console.log("B ",myArr);
// const myn2 = myArr.splice(1,4)
// console.log("C ",myArr);
// console.log(myn2);

const marvel_heros=["Thor","Ironman","Spiderman"]
const dc_heros=["Superman","flash","Batman"]
// console.log(...dc_heros)
// marvel_heroes.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_heros=[...marvel_heros,...dc_heros]
// console.log(all_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(1);
// console.log(real_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from({name:"Hitesh"}))  //INTERESTING we havce to tell whether we have to convert key value pair or data into array 

let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) 