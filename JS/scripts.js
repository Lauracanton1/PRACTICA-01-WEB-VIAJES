// Inicializar AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// Smooth scrolling para los enlaces
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
});



// NIZA COMIDA

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Muestra el modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none"; // Oculta el modal
}
