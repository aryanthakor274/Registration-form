const form = document.getElementById("registerForm");

const message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

message.style.color="yellow";

message.innerHTML="Passwords do not match.";

return;

}

message.style.color="lightgreen";

message.innerHTML="Registration Successful!";

form.reset();

});