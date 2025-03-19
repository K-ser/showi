const navBar = document.querySelector('.main-nav');
const navcloseBtn = document.querySelector('.nav-button');
const navLinks = document.querySelectorAll('.main-nav__list a');

navcloseBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el evento se propague al contenedor del menú  
    toggleSidebar();
});

navLinks.forEach((link) => {
  link.addEventListener('click', toggleSidebar);
});

document.addEventListener('click', function(event) {
    const isClickInside = navBar.contains(event.target); // Verifica si el clic fue dentro del menú

    // Si el clic fue fuera del menú y no dentro del navBar (excepto los enlaces), cierra el menú
    if (!isClickInside && navBar.classList.contains('open')) {
        toggleSidebar();
    }
});

function toggleSidebar() {
  navBar.classList.toggle('open');
  navcloseBtn.classList.toggle('open-btn');
}