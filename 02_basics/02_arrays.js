const marvel_Heroes = ["Theor", "Ironman", "Spiderman"]
const dc_Heroes = ["Batman", "Superman", "Flash"]

// PUSH OPERATOR
//marvel_Heroes.push(dc_Heroes) // it pushes on existing array and just add a new array as an element which hold array
//console.log(marvel_Heroes);
//console.log(marvel_Heroes[3][0]) // 3rd element apne app mein ek array hai jiske karna uksi value nikalne ke liye alag se index number dena pada

// CONCAT OPERATOR
const all_Heroes=marvel_Heroes.concat(dc_Heroes) // it concat and returns a new array basically it merge two array
console.log(all_Heroes);

// SPREAD OPERATOR.         // ... triple dot is used as spread operator
const allnew_heroes=[...marvel_Heroes,...dc_Heroes]
console.log(allnew_heroes)

const another_array=[1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // jab array ke andar multiple array ho or use single array mein convert krna ho tabhi .flat ka use kar skte hai convert karne ke liye
console.log(real_another_array)

console.log(Array.isArray("Deepak")) // here we simply asking that Deepak is an array or not
console.log(Array.from("Deepak")) // .from ka use kar ke haam given string ya object ko array mein convert kar skte hai
console.log(Array.from({name: "Deepak"})) // Intersting // we have to define kiska array banana hai inside object keys ka ya fir values ka otherwise output mein ek empty array show karega agar haam define nhi karenge toh

/* Creating an array from set of elements here elements can be variables or arrays */
let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));