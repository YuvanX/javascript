function addTwoNumber(num1, num2) {
    return num1 + num2
}

const ans = addTwoNumber(2, 5);

function greet(username = "abhi") {
    return `hi there ${username}`
}

// greet() this takes the default value;
// greet("vignesh") this overwrites the default value

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 300, 400));returns an array and operator used before num1 is rest operator used to bundle

function handleObject(anyObject) {
    return `My name is ${anyObject.username} and my age is ${anyObject.age}`
}

handleObject({
    username: "Abhi",
    age: 19
});
// same we can pass arr as arguments into functions