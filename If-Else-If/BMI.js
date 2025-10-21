//Q4
const prompt = require('prompt-sync')();
let bmi=parseInt(prompt("Please enter your BMI "))
if (bmi<18.5){
    let result= "Underweight"
}
else if(bmi<=24.9){
    let result= "Normal Weight"
}
else if(bmi<=29.9){
    let result= "Overweight"
}
else{
    let result= "Obese"
}
console.log(result)