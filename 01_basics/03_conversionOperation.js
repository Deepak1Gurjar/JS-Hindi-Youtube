let score = "Deepak"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber); 

// "33"=>33
// "33abc"=> NaN (Not a Number)
// true=>1 false=>=0

// let isLoggedIn = "" //boolean value will we false // ""=>false
// let isLoggedIn = "Deepak" //boolean value will we true // "Deepak" =>true
let isLoggedIn = 1 //boolean value will we true  // 1=>true 0=>false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
 
let someNumber = 33
let stringNumber= String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// ************* Operations ***************** 

let value=3;
let negvalue= -value;
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let str1="Deepak"
let str2=" Gurjar"
let str3= str1+str2;
console.log(str3);  // Simple addition of two string

console.log("1"+2);  // Addition of String and Number in this string is first then all numbers are treated as a String
console.log(1+"2");  // Addition of Number and String
console.log("1"+2+2); // Additon of String,Number and Number
console.log(1+"2"+2); // Addition of Number,String and Number
console.log(1+2+"2"); // Addition of Number,Number and String
console.log((3+4)*5/3);
console.log(+true);
console.log(+"");
let gamecounter=100;
++gamecounter;
console.log(gamecounter);

let x=3;  //Post Increment
const y=x++;
console.log(y,x);

let a=3; // Pre Increment
const b=++a;
console.log(b,a);


