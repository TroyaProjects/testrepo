function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("output").innerText=interest;
    document.getElementById("out1").innerText=principal;
    document.getElementById("out2").innerText=rate;
    document.getElementById("out3").innerText=year;

}
document.getElementById("upPate").onchange = function() {updateRate()};

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
function validate() {
    let x = principal.value;
    if (x < 1) {
      alert("Enter a positive number");
    }
  }

       