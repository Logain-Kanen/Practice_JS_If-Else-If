//Q6
const prompt = require('prompt-sync')();
let month=parseInt(prompt("Please enter the number of the month 1-12 "))
if (month===12||month===1||month===2){
    let result= "Winter"
}
else if(month===3||month===4||month===5){
    let result= "Spring"
}
else if(month===6||month===7||month===8){
    let result= "Summer"
}
else if(month===9||month===10||month===11){
    let result= "Fall"
}
else{
    let result= "Invalid Number"
}
console.log(result)