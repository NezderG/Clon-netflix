// Seleccionamos todos los elementos de imagen que están dentro de la clase "row-posters"
const posters = document.querySelectorAll('.row-posters img');

// Seleccionamos el popup y sus elementos internos
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupSynopsis = document.getElementById('popup-synopsis');
const popupTrailer = document.getElementById('popup-trailer');
const closePopup = document.getElementById('close');

// Iteramos sobre todas las imágenes
posters.forEach(poster => {
    poster.addEventListener('click', function() {
        // Obtenemos los valores del título (el atributo alt), la sinopsis y el tráiler (data-* atributos personalizados)
        const title = this.alt; // El título de la canción está en el atributo alt de la imagen
        const synopsis = this.getAttribute('data-synopsis'); // Sinopsis de la canción
        const trailerUrl = this.getAttribute('data-trailer'); // URL del tráiler

        // Asignamos los valores al contenido del popup
        popupTitle.textContent = title;
        popupSynopsis.textContent = synopsis;
        popupTrailer.src = trailerUrl; // Cargamos el tráiler en el iframe

        // Mostramos el popup
        popup.style.display = 'block';
    });
});

// Cerramos el popup cuando el usuario haga clic en el botón de cierre
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Ocultamos el popup
    popupTrailer.src = ''; // Limpiamos el tráiler para detener la reproducción
});

// También cerramos el popup si el usuario hace clic fuera del contenido del popup
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
        popupTrailer.src = ''; // Limpiamos el tráiler para detener la reproducción
    }
});

// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupSynopsis = document.getElementById('popup-synopsis');
    const popupAudio = document.getElementById('popup-audio');
    const popupAudioSource = document.getElementById('popup-audio-source');
    const closeBtn = document.getElementById('close');
    const posters = document.querySelectorAll('.row-posters img');

    // Evento para cada imagen
    posters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.alt;  // El alt de la imagen es el título
            const synopsis = poster.getAttribute('data-synopsis');  // Sinopsis de la canción
            const audioUrl = poster.getAttribute('data-audio');  // URL del audio de la canción

            // Asignamos el contenido al popup
            popupTitle.textContent = title;
            popupSynopsis.textContent = synopsis;
            popupAudioSource.src = audioUrl; // Asignar la fuente del audio
            popupAudio.load(); // Cargar el nuevo audio

            // Mostramos el popup
            popup.style.display = 'block';
        });
    });

    // Cerrar el popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        popupAudio.pause(); // Detener el audio cuando se cierra el popup
        popupAudio.currentTime = 0; // Reiniciar el audio
    });

    // Cerrar el popup cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupAudio.pause(); // Detener el audio
            popupAudio.currentTime = 0; // Reiniciar el audio
        }
    });
});

// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupSynopsis = document.getElementById('popup-synopsis');
    const popupVideo = document.getElementById('popup-video');
    const popupVideoSource = document.getElementById('popup-video-source');
    const closeBtn = document.getElementById('close');
    const posters = document.querySelectorAll('.row-posters img');

    // Evento para cada imagen
    posters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.alt;  // El alt de la imagen es el título
            const synopsis = poster.getAttribute('data-synopsis');  // Sinopsis del video
            const videoUrl = poster.getAttribute('data-video');  // URL del video local

            // Asignamos el contenido al popup
            popupTitle.textContent = title;
            popupSynopsis.textContent = synopsis;
            popupVideoSource.src = videoUrl; // Asignar la fuente del video
            popupVideo.load(); // Cargar el nuevo video

            // Mostramos el popup
            popup.style.display = 'block';
        });
    });

    // Cerrar el popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        popupVideo.pause(); // Detener el video cuando se cierra el popup
        popupVideo.currentTime = 0; // Reiniciar el video
    });

    // Cerrar el popup cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupVideo.pause(); // Detener el video
            popupVideo.currentTime = 0; // Reiniciar el video
        }
    });
});

// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupSynopsis = document.getElementById('popup-synopsis');
    const popupPdf = document.getElementById('popup-pdf');
    const closeBtn = document.getElementById('close');
    const posters = document.querySelectorAll('.row-posters img');

    // Evento para cada imagen
    posters.forEach(poster => {
        poster.addEventListener('click', function() {
            const title = poster.alt;  // El alt de la imagen es el título
            const synopsis = poster.getAttribute('data-synopsis');  // Sinopsis del cómic
            const pdfUrl = poster.getAttribute('data-pdf');  // URL del archivo PDF

            // Asignamos el contenido al popup
            popupTitle.textContent = title;
            popupSynopsis.textContent = synopsis;
            popupPdf.src = pdfUrl; // Asignar la fuente del PDF

            // Mostramos el popup
            popup.style.display = 'block';
        });
    });

    // Cerrar el popup
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
        popupPdf.src = ''; // Limpiar el iframe cuando se cierra el popup
    });

    // Cerrar el popup cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupPdf.src = ''; // Limpiar el iframe
        }
    });
});


