const myArr = [0, 1 , 2, 3, 4, 5]; // array define
const anotherArr = new Array(1, 2, 3, 4); // another way to define array

// console.log(myArr[0]); accessing array elements

//Array methods
myArr.push(7); // adds element at the end
myArr.pop() //deletes the last element
myArr.unshift(9) // adds the element at the start
myArr.shift() //deletes the starting element

myArr.includes(0) //returns true or false depending upon if the element specified exists in the array or not
const strArr = myArr.join() // returns a string by seperating with specified separetor

const myn1 = myArr.slice(1, 3);
// the above the method gives part of the arr mentioned and does not change the arr

const myn2 = myArr.splice(1, 3);
// this gives elements from 1-3 (including 3) but it changes the arr

