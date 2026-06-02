function login() {

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.style.display = "none";

    // Validar campos vacíos
    if (!usuario || !password) {
        errorMsg.textContent = "⚠ Debes completar todos los campos.";
        errorMsg.style.display = "block";
        return;
    }

    // ADMIN
    if (usuario === "admin" && password === "admin123") {

        localStorage.setItem("sesion", "admin");

        window.location = "admin.html";
        return;
    }

    // CONDUCTORES
    if (usuario === "M01" && password === "1234") {

        localStorage.setItem("sesion", "conductor");
        localStorage.setItem("conductor", "M01");

        window.location = "conductor.html";
        return;
    }

    if (usuario === "M02" && password === "1234") {

        localStorage.setItem("sesion", "conductor");
        localStorage.setItem("conductor", "M02");

        window.location = "conductor.html";
        return;
    }

    if (usuario === "M03" && password === "1234") {

        localStorage.setItem("sesion", "conductor");
        localStorage.setItem("conductor", "M03");

        window.location = "conductor.html";
        return;
    }

    errorMsg.textContent = "⚠ Usuario o contraseña incorrectos.";
    errorMsg.style.display = "block";
}