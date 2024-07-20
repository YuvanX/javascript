const points = 100
// console.log(points);

const anotherPoint = new Number(200)
// console.log(anotherPoint.toFixed(2));

const randomNumber = 123.456
// console.log(randomNumber.toPrecision(4))

const largeNumber = 1000000
// console.log(largeNumber.toLocaleString('en-IN'))

// **************** Math ************************

// console.log(Math.abs(-4))
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(1,2,0,5,7))
// console.log(Math.max(3,4,5,25,100))


// console.log(Math.random()) // gives values b/w 0 and 1
console.log(Math.floor(Math.random() * 10) + 1)

const min = 100
const max = 200

console.log(Math.floor(Math.random() * (max - min + 1) + min))
