// ++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++
const score = 400
console.log(score);
const balance= new Number(100); 
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // toFixed used to reduce the precision value it means the decimal value after 100 will be 100.00 

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));

const hundred = 1000000
console.log(hundred.toLocaleString()); // By default this value is represented on american number system
console.log(hundred.toLocaleString('en-In')); // values are represented on Indian number system


// ++++++++++++++++++++  MATHS +++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-10)); //abs means absolute it is function that covert a negative integer value into positive integer value
console.log(Math.round(4.5)); // Represent a frictional value into round of integer value
console.log(Math.ceil(4.2)); // takes the highest value 
console.log(Math.floor(4.9)); // takes the lowest value
console.log(Math.min(4,5,6,8,3)); // for finding minimum value
console.log(Math.max(10,87,564,98,3926)); // for finding maximum value

console.log(Math.random()); // the value of Math.random always lies between 0 & 1
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min=10
const max=20

console.log(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (max - min + 1) + min))