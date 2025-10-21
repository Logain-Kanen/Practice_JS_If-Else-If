//Q3
const prompt = require('prompt-sync')();
let age=parseInt(prompt("Please enter your age "))
if (age<=12){
    let result= "Child"
}
else if(age<=19){
    let result= "Teenager"
}
else if(age<=59){
    let result= "Adult"
}
else{
    let result= "Senior"
}
console.log(result)