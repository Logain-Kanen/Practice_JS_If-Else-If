//Q2
const prompt = require('prompt-sync')();
let day=parseInt(prompt("Please enter the number of the week 1-7: "))
if (day===1){
    let result= "Sunday"
}
else if(day===2){
    let result= "Monday"
}
else if(day===3){
    let result= "Tuesday"
}
else if(day===4){
    let result= "Wednesday"
}
else if(day===5){
    let result= "Thursday"
}
else if(day===6){
    let result= "Friday"
}
else if(day===7){
    let result= "Saturday"
}
else{
    let result= "Invalid Day"
}
console.log(result)