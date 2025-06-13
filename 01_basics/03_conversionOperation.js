let score = "Deepak"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber); 

// "33"=>33 // Convertion of an string value into a number value is possible
// "33abc"=> NaN (Not a Number) but its data type is a number
// true=>1 false=>=0 // if we convert a boolean value into a number than if boolean value is true in number it will be represented as 1 and if boolean value is false than it will be represented as 0 in number as Conversion Operation (typeconverstion)

// let isLoggedIn = "" //boolean value will we false if we pass an empty string // ""=>false
// let isLoggedIn = "Deepak" //boolean value will we true if we pass something as a string // "Deepak" =>true
let isLoggedIn = 1 //boolean value will we true  // 1=>true 0=>false

let booleanIsLoggedIn = Boolean(isLoggedIn) // Number to Boolean conversion
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
console.log((3+4)*5/3); // If we wanted to execute operations as per our choice based on additon,subtraction,multiplication,Division on operands then we have to write them in a parenthesis ()  

console.log(+true);
console.log(+"");

let gamecounter=100; //Pre Increment
++gamecounter;
console.log(gamecounter);

let x=3;  //Post Increment //Postfix Operator
const y=x++; // in this first the value of Y remains same 3 and then the value of x is incresed by 1 that will become 4
console.log(`y:${y},x:${x}`);

let a=3; // Pre Increment //Prefix Operator
const b=++a;   // in this first the value of b is increased by 1 that will become 4 and then the value of a is incresed by 1 that will become 4
console.log(`b:${b},a:${a}`); // using backticks dollar sign along with curely brackets just another way of printing output on the console


