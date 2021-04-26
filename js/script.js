alert("This is only a temporary and unsecure password, please change it ASAP")
var firstName = prompt("What's your first name?");
var lastName = prompt("What's your last name?");
var favColor = prompt("Which's your favourite color?");
document.getElementById("here-is").innerHTML = "Here is your password: ";
document.getElementById("passwd").innerHTML = firstName + lastName + favColor + "21";