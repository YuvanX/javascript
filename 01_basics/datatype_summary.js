// Primitive 
// types : 7
// Number, String, Boolean, null, undefined, Symbol, BigInt

let score = 2
let points = 5.3

let isLoggedIn = true
let randomValue = null
let location; //undefined

let id = Symbol('123')
let value2 = Symbol('123')
console.log(id === value2); //false

let bigNumber = 333344545444454544545454545454n
console.log(typeof bigNumber)

// Non - primitives (Reference type)
// Array, Object, Function

const myFunction = function() {
    console.log("Hello world");
}

const places = ["India", "Europe", "USA", "Japan"]
const myObj = {
    name: "Abhi",
    age: 19
}

console.log(typeof places) //object
console.log(typeof myObj); //object
console.log(typeof myFunction); // function but also function object


// **************** Stack and Heap memory *****************

// Primitive => Stack ==> copy of value is given
// Non Primitive => Heap. ==> reference is given

