// Switch statement // conditional statement

// switch (key)    // Basic syntax of Switch case
// {
//     case value : 
//      break;
//     case value : 
//         break;
//     default : 
//      break;
// }

const month = 3  // yaha pe ek integer value se cases ko match kiya hai
switch(month)
{
    case 1 : console.log("January")
        break;
    case 2 : console.log("Febuary") 
        break;
    case 3 : console.log("March")   // By default hota yaha hai ki jaha pe bhi apka key match ho gya or apne break use nhi kiya toh uske baad ka sara code execute ho jaata hai automatically except default block ke code ko hata ke
        break;                      // esliye break ka use karna har case ke baad imp hai 
    case 4 : console.log("April")
        break;
    default :
    console.log("Default case matched")
    break ;
        
}
const favmonth = "Nov"  // yaha pe ek string value se cases ko match kiya hai
switch(favmonth)
{
    case "Jan" : console.log("January")
        break;
    case "Feb" : console.log("Febuary") 
        break;
    case "Mar" : console.log("March")   // By default hota yaha hai ki jaha pe bhi apka key match ho gya or apne break use nhi kiya toh uske baad ka sara code execute ho jaata hai automatically except default block ke code ko hata ke
        break;                      // esliye break ka use karna har case ke baad imp hai 
    case "Apr" : console.log("April")
        break;
    case "May" : console.log("May")
        break; 
    case "Nov" : console.log("November")
        break;     
    default :
    console.log("Default case matched")
    break ;
}