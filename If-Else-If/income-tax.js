//Q8
const prompt = require('prompt-sync')();
let income=parseInt(prompt("Please enter your annual income "))
if (income<=10000){
    let result= "No tax"
}
else if(income<=30000){
    let result= "10% tax"
}
else if(income<=60000){
    let result= "20% tax"
}
else if(income<=100000){
    let result= "30% tax"
}
else{
    let result= "40% tax"
}
console.log(result)