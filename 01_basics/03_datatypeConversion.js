let score = "33"

console.log(typeof score) //string
let valueInInteger = Number(score)
console.log(typeof valueInInteger) // number

let score2 = '22abcv'
console.log(typeof score2)
let secondValueInInteger = Number(score2)
console.log(typeof secondValueInInteger) // number but the value stored is NaN

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) 

// 1 => true; 0 => false
// "" => false; "Abhi" => true

let someNumber = 25
let stringNumber = String(someNumber)
console.log(stringNumber)
// "33"

// ************************ Operations ************************

let value = 25
let negValue = -value
console.log(negValue) // -25

let str1 = "hello"
let str2 = " Yuvan"
let str3 = str1 + str2
console.log(str3) 

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 ** 3)
// console.log(2 / 2)
// console.log(2 % 2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2) // "122"
console.log(2 + 1 + "2") // "32"

console.log(+true) // 1
console.log(+"") // 0


