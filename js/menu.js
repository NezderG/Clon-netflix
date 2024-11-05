// script.js

// Función para cerrar sesión y redirigir al index
document.getElementById('cerrarSesion').addEventListener('click', function () {
    // Elimina la sesión guardada
    localStorage.removeItem('user');
    localStorage.removeItem('password');

    // Redirige al index (login)
    window.location.href = 'index.html';
});

// Función para verificar si hay un usuario guardado en localStorage
function checkLoginStatus() {
    const user = localStorage.getItem('user');
    const password = localStorage.getItem('password');

    if (user && password) {
        console.log("Sesión iniciada como:", user);
        // Aquí puedes hacer que automáticamente inicie sesión
        // o redirigir a la página del menú si hay un usuario logueado
    } else {
        console.log("No hay sesión iniciada");
    }
}

// Llamamos a la función al cargar la página
checkLoginStatus();

// Selección de elementos
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalTrailer = document.getElementById("modal-trailer");
const closeBtn = document.getElementsByClassName("close")[0];

// Datos de las películas/series (aquí deberías tener la sinopsis y el trailer)
const items = [
    {
        title: "The Silence",
        synopsis: "Una familia debe luchar por sobrevivir en un mundo invadido por criaturas que cazan por el sonido.",
        trailer: "https://www.youtube.com/watch?v=trailer_link_1"
    },
    {
        title: "Black Summer",
        synopsis: "Una madre busca a su hija mientras un apocalipsis zombi arrasa la ciudad.",
        trailer: "https://www.youtube.com/watch?v=trailer_link_2"
    },
    // Agrega más elementos aquí
];

// Función para abrir el modal
function openModal(index) {
    const item = items[index];
    modalTitle.textContent = item.title;
    modalSynopsis.textContent = item.synopsis;
    modalTrailer.href = item.trailer;
    modal.style.display = "block";
}

// Evento de clic en las imágenes
document.querySelectorAll('.row-posters img').forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
