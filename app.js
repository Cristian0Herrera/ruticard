function login(){

const usuario =
document.getElementById("usuario").value;

const password =
document.getElementById("password").value;

// ADMIN

if(
usuario === "admin" &&
password === "admin123"
){
window.location =
"admin.html";
return;
}

// CONDUCTOR M01

if(
usuario === "M01" &&
password === "1234"
){
localStorage.setItem(
"conductor",
"M01"
);

window.location =
"conductor.html";

return;
}

// CONDUCTOR M02

if(
usuario === "M02" &&
password === "1234"
){
localStorage.setItem(
"conductor",
"M02"
);

window.location =
"conductor.html";

return;
}

// CONDUCTOR M03

if(
usuario === "M03" &&
password === "1234"
){
localStorage.setItem(
"conductor",
"M03"
);

window.location =
"conductor.html";

return;
}

alert("Credenciales incorrectas");
}