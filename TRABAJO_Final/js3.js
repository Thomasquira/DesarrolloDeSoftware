function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function() { // Espera a que la página cargue completamente antes de ejecutar el script

    // Crear un botón "Volver Arriba" (flecha)
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑'; // Agrega el símbolo de la flecha arriba
    scrollToTopBtn.classList.add('scrollToTopBtn'); // Asigna la clase de estilo al botón
    document.body.appendChild(scrollToTopBtn); // Agrega el botón al final del body
  
    // Muestra u oculta el botón al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY; // Posición del scroll actual
        const documentHeight = document.documentElement.scrollHeight; // Altura total de la página
        const windowHeight = window.innerHeight; // Altura visible de la ventana
  
        // Si el scroll llega a un 80% de la página, muestra el botón
        if (scrollPosition > documentHeight - windowHeight - 1200) {
            scrollToTopBtn.classList.add('show'); // Muestra el botón
        } else {
            scrollToTopBtn.classList.remove('show'); // Oculta el botón
        }
    });
  
    // Al hacer clic en el botón, hace un desplazamiento suave hacia arriba
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0, // Lleva al inicio de la página
            behavior: 'smooth' // Desplazamiento suave
        });
    });
});
