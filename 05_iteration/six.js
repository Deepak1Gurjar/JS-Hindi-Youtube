const coding = ["js", "css", "html", "react", "node"]
const values=coding.forEach ( (item)=>{
  //console.log(item)
  return item; // return item karne ke baad bhi values undefined hi hongi kyu ki forEach loop kuch bhi return nhi krta by defaultn in JS
})
//console.log(values);  

const myNums =[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=> num>5) //filter() ek array method hai jo har element pe loop karta hai Har element ke liye condition check karta hai:👉 kya num > 5 hai?
// const newNums=myNums.filter((num)=>
// {
//     return num > 4 //scoope open karte hai toh return keyword use karna padega
// }
//)
//console.log(newNums); // jo elements is condition ko true karte hain, sirf wahi naya array newNums mein jaate hain.

// const newNums = []  // filter ke comparision mein mere ko forEach jada smjh aaya
// myNums.forEach((num)=>{
//    if (num>5)
//    {
//      newNums.push(num)
//    }
// })
// console.log(newNums);

const books = [
    {
        title: 'Book One', genre: 'Fiction', published : 2001, edition : 2019
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', published : 2002, edition : 2020
    },
    {
        title: 'Book Three', genre: 'History', published : 2003, edition : 2021
    },
    {
        title: 'Book Four', genre: 'Science', published : 2004, edition : 2022
    },
    {
        title: 'Book Five', genre: 'Fiction', published : 2005, edition : 2023
    },
    {
        title: 'Book Six', genre: 'History', published : 2006, edition : 2024
    },
    {
        title: 'Book Seven', genre: 'Non-Fiction', published : 2007, edition : 2025
    },
    {
        title: 'Book Eight', genre: 'Science', published : 2008, edition : 2026
    },
    {
        title: 'Book Nine', genre: 'Fiction', published : 2009, edition : 2027
    },

]

let userBooks = books.filter ( (bk)=> bk.genre==='History')
//userBooks = books.filter ( (bk)=> {bk.published>=2005}) // {} yaha pe scoope open kar liya tha esliye output mein empty array show karega
userBooks = books.filter ( (bk)=> {  // {} esliye jab bhi scoope open kare return keyword ka use kare av output sahi show karega filter ke hisab se
    return bk.published>=2005 && bk.genre==='Fiction'
}) 
console.log(userBooks)