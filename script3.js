document.addEventListener("DOMContentLoaded", () => {
  const highlight = document.querySelectorAll(".highlight");
  
  // Asegúrate de que se seleccionen todos los tooltips
  const tooltips = document.querySelectorAll(".tooltip");

  highlight.forEach((text, index) => {
    text.addEventListener("mouseover", () => {
      // Muestra el tooltip correspondiente al texto resaltado
      tooltips[index].style.display = "block";
    });

    text.addEventListener("mouseout", () => {
      // Oculta el tooltip cuando el mouse sale
      tooltips[index].style.display = "none";
    });
  });
});

