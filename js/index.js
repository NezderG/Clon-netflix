// script.js

// Manejo del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica si el usuario existe en localStorage
    const storedEmail = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert("Inicio de sesión exitoso");
        // Redirige al menú principal
        window.location.href = 'menu.html';
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

// Mostrar u ocultar la contraseña
document.getElementById('showPassword').addEventListener('change', function () {
    const passwordInput = document.getElementById('password');
    if (this.checked) {
        passwordInput.type = 'text'; // Muestra la contraseña
    } else {
        passwordInput.type = 'password'; // Oculta la contraseña
    }
});

// Manejo del registro
document.getElementById('registerLink').addEventListener('click', function () {
    const email = prompt("Introduce tu correo:");
    const password = prompt("Introduce tu contraseña:");

    if (email && password) {
        // Guardamos en localStorage
        localStorage.setItem('user', email);
        localStorage.setItem('password', password);
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
    }
});

// Manejo del olvido de contraseña
document.getElementById('forgotPasswordLink').addEventListener('click', function () {
    const email = prompt("Introduce tu correo para restablecer la contraseña:");

    if (email === localStorage.getItem('user')) {
        const newPassword = prompt("Introduce tu nueva contraseña:");
        localStorage.setItem('password', newPassword);
        alert("Contraseña actualizada exitosamente.");
    } else {
        alert("Este correo no está registrado.");
    }
});
