const name="Deepak"
const repoCount=50
//console.log(name+repoCount+"Value");
console.log(`Hello my name is ${name} & my repocount is ${repoCount}`); // by uisng backticks `` we create placeholder where we can directly inject variable and this is called String Interpolation
const gameName = new String ('deepak-g')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length) // for finding length of a given string
console.log(gameName.toUpperCase()) // for converting the given string into uppercase
console.log(gameName.charAt(4)) // for accessing the element of a string as per their index number
console.log(gameName.indexOf('a')) //for accessing the index number of an element in a string

const newString=gameName.substring(0,4); // in substring we cannot use negative values
console.log(newString);
const anotherString = gameName.slice(-6,4);
console.log(anotherString);

const newStringOne= "  deepak   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))
console.log(gameName.split('-')) // string converted to array using split