
    //function to compute interest in calculator
function compute()

{   //Establishing vars for computing
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result= document.getElementById("result");
    //Calcuation maths for interest

    var interest=principal*years*rate/100; 
    //Translates year selected to actual year

    var actualYear=2021+parseFloat(years); 
    //Testing for positive principal 

    if(principal < 1){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    //Calculation text to report with highlighting
    else{ 
        result.innerHTML=
        `
        If you deposit <mark>${principal}</mark>,<br>
        at an interest rate of <mark>${rate}</mark>.<br>
        You will receive an amount of <mark>${interest}</mark>,<br>
        in the year <mark>${actualYear}</mark>
        `
    }
}
    //function to update rate slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
