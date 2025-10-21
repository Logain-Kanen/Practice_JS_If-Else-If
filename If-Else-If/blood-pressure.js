//Q9
const prompt = require('prompt-sync')();
let systolic=parseInt(prompt("Please enter your systolic in mmHg "));
let diastolic=parseInt(prompt("Please enter your diastolic in mmHg "));
if (systolic<120 && diastolic<80){
    let result= "Normal"
}
else if(systolic<=129 && diastolic<80){
    let result= "Elevated"
}
else if(systolic<=139 || diastolic<=89){
    let result= "High BP Stage 1"
}
else if(systolic<=180 || diastolic<=120){
    let result= "High BP Stage 2"
}
else{
    let result= "Hypertensive Crisis"
}
console.log(result)