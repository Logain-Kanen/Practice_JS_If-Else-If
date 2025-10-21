//Q10
const prompt = require('prompt-sync')();
let score=parseInt(prompt("Please enter your credit score "))
if (score>=800&&score<=850){
    let result= "Exceptional - Best rates available"
}
else if (score>=740&&score<=799){
    let result= "Very Good - Better than average"
}
else if (score>=670&&score<=739){
    let result= "Good - Near or above average"
}
else if (score>=580&&score<=669){
    let result= "Fair- Lower than average"
}
else if(score>=300&&score<=579){
    let result= "Poor - Credit may be denied"
}
else{
    let result="Invalid if outside 300-850"
}
console.log(result)