//Dates

const myDate = new Date();

// console.log(typeof myDate)
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());


const customDate = new Date(2005, 4, 25);
const anotherCusDate = new Date("2005-04-25")
// console.log(customDate.toLocaleDateString());

const timeStamp = Date.now();
// console.log(timeStamp);

// console.log(customDate.getTime())


// console.log(Math.floor(Date.now() / 1000))


const newDate = new Date();

newDate.toLocaleString('default', {
    weekday: 'long'
});
// there are lot of customiazation that can be done using localeString