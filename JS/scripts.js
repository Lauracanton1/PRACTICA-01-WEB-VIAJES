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

// Mostrar el modal al hacer clic en la tarjeta
document.querySelectorAll('.delicia-card').forEach(card => {
    card.addEventListener('click', () => {
        // Obtener información de la tarjeta
        const title = card.getAttribute('data-title');
        const ingredients = card.getAttribute('data-ingredients').split(',');
        const instructions = card.getAttribute('data-instructions');

        // Llenar el modal con la información
        document.querySelector('.receta-title').innerText = title;

        const ingredientesList = document.querySelector('.ingredientes-list');
        ingredientesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos ingredientes
        ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.innerText = ingredient.trim(); // Agregar cada ingrediente a la lista
            ingredientesList.appendChild(li);
        });
        document.querySelector('.instructions').innerText = instructions;

        // Mostrar el modal
        const modal = document.querySelector('.modal');
        modal.style.display = 'flex'; // Mostrar el modal
    });
});

// Cerrar el modal al hacer clic en el botón "X"
document.querySelector('.close-btn').addEventListener('click', (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'; // Ocultar el modal
});

// Cerrar el modal al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal al hacer clic fuera
    }
});





// Venecia A DONDE IR
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "flex"; // Muestra el modal
    modalImg.src = imageSrc; // Cambia la fuente de la imagen
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Oculta el modal
}




