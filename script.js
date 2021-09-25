//Check prinicipal and compute interest
function compute()
{
    var principal_value = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal_value * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal_value + interest;
    
    //principal validation
    var principal_entered = document.getElementById("principal");
    
    if(principal_entered.value == "" || principal_entered.value < 1){
        alert("Enter positive number");
        principal_entered.focus();
        return false;
    }
    else {
    document.getElementById("result").innerHTML = "If you deposit <span style='background-color:yellow;'>" + principal_value + "</span><br>at an interest rate of <span style='background-color:yellow;'>" + rate + "%" + "</span><br>You will receive an amount of <span style='background-color:yellow;'>" + interest + "</span><br>in the year <span style='background-color:yellow;'>" + year + "</span>";
    
    }

}


//Show rate value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}