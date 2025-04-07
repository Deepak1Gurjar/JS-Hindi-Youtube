const marvel_Heroes = ["Theor", "Ironman", "Spiderman"]
const dc_Heroes = ["Batman", "Superman", "Flash"]

// PUSH OPERATOR
//marvel_Heroes.push(dc_Heroes) // it pushes on existing array and just add a new array as an element which hold array
//console.log(marvel_Heroes);
//console.log(marvel_Heroes[3][0])

// CONCAT OPERATOR
const all_Heroes=marvel_Heroes.concat(dc_Heroes) // it concat and returns a new array basically it merge two array
console.log(all_Heroes);

// SPREAD OPERATOR
const allnew_heroes=[...marvel_Heroes,...dc_Heroes]
console.log(allnew_heroes)

const another_array=[1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat()
console.log(real_another_array)

console.log(Array.isArray("Deepak"))
console.log(Array.from("Deepak"))
console.log(Array.from({name: "Deepak"})) // Intersting 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));