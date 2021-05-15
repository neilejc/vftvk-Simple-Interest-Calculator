
    //function to compute interest in calculator
function compute(){
    //establishing variables for compute 
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear() + parseInt(years);
var compute = "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

    //principal check if 0 or negative 
if(principal < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
}
    //Display result on button click
document.getElementById("result").innerHTML= compute;

}
    //function to update rate slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
