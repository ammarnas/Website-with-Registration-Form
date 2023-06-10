function loginH() {
    document.getElementById("login-form").style.display = "block";
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function Register() {
  x.style.left = "-480px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}

var modal = document.getElementById("login-form");

window.onclick = function (event) {
  if (event.targrt == modal) {
    modal.style.display = "none";
  }
};
