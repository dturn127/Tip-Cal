//Fuction to Calculate the tip.
function calTip(){
//declare variables.
    let billTotal = document.getElementById("dueAmt").value;
    let serviceLevel = document.getElementById("servQual").value;
    let numDiners = document.getElementById("diners").value;


//Prevent fields from being left blank
if (billTotal === "" || serviceLevel == 0 || numDiners ===""){
  document.getElementById('displayAmt').innerHTML = "Please complete form";
  return;
}



//Calculation of tip, round the tip up, only display 2 decimal places.
let tipTotal = (billTotal * serviceLevel)/ numDiners;
tipTotal = Math.round(tipTotal * 100)/ 100;
tipTotal = tipTotal.toFixed(2);
console.log(tipTotal);

document.getElementById('displayAmt').innerHTML = tipTotal;


};


//Modal code via www.w3schools.com
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal`
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
    calTip();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Clear amounts and renter the placeholder values.
function clear() {
    document.getElementById("dueAmt").value="";
    document.getElementById("dueAmt").placeholder = "0.00";
    document.getElementById("servQual").value = 0;
    document.getElementById("diners").value="";
    document.getElementById("diners").placeholder = "Number of Diners";
    return;
}

document.getElementById("clear").onclick = function(){
    clear();
}






/*document.getElementById("getTip").onclick = function(){
  calTip();
};*/
