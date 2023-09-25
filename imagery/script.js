var open;

function aadTH() {
    open = document.getElementById("dT");
    dT.style.display = "block";

    //open = document.createElement(a);
    //open.setAttribute("href", "home.html");
}
function aadED() {
    open = document.getElementById("dE");
    dE.style.display = "block";
}



function input() {
    document.getElementById("showusers").value = document.getElementById("users").value;
}
function PPP() {
    var x = document.getElementById("Puser").value;
    document.getElementById("demo").innerHTML = x;
}