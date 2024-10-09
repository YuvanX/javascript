// objects can be defined in two ways 1.constructor 2.literal (constructor only forms singleton object)

// obj literal
const mySym = Symbol("key1");

const object1 = {
    myName: "YuvanVignesh",
    age: 19,
    [mySym]: "mykey1",// symbol having key
}
// 2 ways to access
// object1.age
// object1["age"]

// change values
// object1.age = 20

// Object.freeze(object1);
// after above freeze no changes will be propagated in the specifed object

object1.greeting = function() {
    console.log(`hello user ${this.myName}`);
    
}
object1.greeting();

const obj2 = {
    a: "1",
    b: "2"
}

const obj3 = {
    c: "3",
    d: "4"
}

const obj4 = {...obj2, ...obj3};
console.log(obj4);
// we can also use Object.assign({}, obj2, obj3) method
// Object.keys(obj2) => returns an arr with keys of obj2
// Object.values(obj2) => same as above but values
// Object.entries(obj2)  


// object destructring
const {name: n} = {
    name: "Abhi",
    age: 20
}

console.log(n);
