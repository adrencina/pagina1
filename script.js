// Obtenemos el elemento del menú
const menu = document.querySelector('header');

// Creamos la función que se ejecutará al hacer scroll
function handleScroll() {
  // Obtenemos la posición del scroll
  const scrollTop = window.pageYOffset;

  // Si la posición del scroll es mayor que 100 pixels, cambiamos el color del fondo del menú
  if (scrollTop > 100) {
    menu.style.backgroundColor = "#505050";
  } else {
    menu.style.backgroundColor = 'transparent';
  }
}

// Asignamos la función como manejador del evento "scroll" de la ventana
window.addEventListener('scroll', handleScroll);