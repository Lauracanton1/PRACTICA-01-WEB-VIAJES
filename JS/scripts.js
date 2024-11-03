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

// seccion index. sobre nosotros
document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.querySelector(".intro-section");

    function handleScroll() {
        const sectionPosition = introSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            introSection.classList.add("show");
            window.removeEventListener("scroll", handleScroll); // Solo ejecuta una vez
        }
    }
    
    window.addEventListener("scroll", handleScroll);
});
document.addEventListener("DOMContentLoaded", function () {
    const introSection = document.querySelector(".intro-section");
    const accordionToggle = document.querySelector(".accordion-toggle");
    const accordionContent = document.querySelector(".accordion-content");

    function handleScroll() {
        const sectionPosition = introSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            introSection.classList.add("show");
            window.removeEventListener("scroll", handleScroll); // Ejecuta una vez
        }
    }

    // Función para manejar el acordeón
    accordionToggle.addEventListener("click", function () {
        accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : `${accordionContent.scrollHeight}px`;
    });

    window.addEventListener("scroll", handleScroll);
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











// Efecto de hover en el footer
$(document).ready(function() {
    $(".social-icons .btn-floating").hover(function() {
        $(this).css("transform", "scale(1.3)");
    }, function() {
        $(this).css("transform", "scale(1)");
    });
});


// COMPRA REVISTA FÍSICA
function confirmPurchase(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Oculta el formulario y muestra el mensaje de agradecimiento
    document.getElementById('purchaseForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Cierra el modal después de 3 segundos
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('purchaseModal'));
        modal.hide();
    }, 3000);
}

