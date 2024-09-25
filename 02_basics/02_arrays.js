const marvelHeroes = ["ironman", "Hulk"];
const dcHeroes = ["superman", "batman"];

// console.log(marvelHeroes.push(dcHeroes)); this line give an array inside an array, changes the marvelHeros

const allHeros = marvelHeroes.concat(dcHeroes);
// return a new array making into an single array

const anotherNewArry = [...marvelHeroes, ...dcHeroes]
// spread operator

const usingFlat = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];

const finalArr = usingFlat.flat(Infinity);
// console.log(finalArr) specify the depth as in this case infinity depth

// console.log(Array.isArray("Yuvan")) returns true or false based on the value provided

// console.log(Array.from("Yuvan")) gives an array 
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1, score2, score3))

