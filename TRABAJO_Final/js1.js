document.addEventListener("DOMContentLoaded", function() {
    // Crear el botón de "Volver Arriba" dinámicamente
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑';
    scrollToTopBtn.classList.add('scrollToTopBtn'); // Asignar la clase de estilo
    document.body.appendChild(scrollToTopBtn);

    // Función para mostrar u ocultar el botón según el desplazamiento
    window.addEventListener('scroll', function() {
        // Obtener la altura total del documento y la posición del scroll
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Cambiar el umbral de activación, por ejemplo cuando el scroll pase el 80% de la altura del documento
        if (scrollPosition > documentHeight - windowHeight - 1200) {
            // Mostrar el botón añadiendo la clase 'show'
            scrollToTopBtn.classList.add('show');
        } else {
            // Ocultar el botón quitando la clase 'show'
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Funcionalidad de desplazamiento suave hacia arriba al hacer clic en el botón
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});