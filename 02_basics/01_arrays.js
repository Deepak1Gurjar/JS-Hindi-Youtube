// array

const myArr =[1,2,3,4,5]
console.log(myArr);
console.log(myArr[1]);
const myHeors=["Shaktimaan", "Naagraj", "Haatim"]
console.log(myHeors);

const myArr2= new Array (1,2,3,4,5) // declaration of array in different way
console.log(myArr2);

// Array methods

// PUSH AND POP
myArr.push(6) 
myArr.pop() // pop is uesd to removed last value of the array atuomatically 
console.log(myArr)

// UNSHIFT AND SHIFT
myArr2.unshift(9) 
myArr2.shift()
console.log(myArr2.includes(2));
console.log(myArr2.indexOf(2));

// JOIN
const newArr = myArr2.join()
console.log(myArr2)
console.log(typeof newArr)

// SLICE AND SPLICE

console.log("A", myArr2)
const myn1= myArr2.slice(1,3)

console.log(myn1);  // Slice 
console.log("B", myArr2)

const myn2= myArr2.splice(1,3) // Splice
console.log("c", myArr2)
console.log(myn2);