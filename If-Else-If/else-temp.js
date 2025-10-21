//Q1
const prompt = require('prompt-sync')();
let temp=parseInt(prompt("Please enter the temperature "))

if (temp>30){
    let result="Hot"
}
else if (temp>20 &&temp<=30){
    let result="Warm"
}
else if (temp>10 &&temp<=19){
    let result="Cool"
}
else{
    let result="Cold"
}
console.log("That temperature is "+result)