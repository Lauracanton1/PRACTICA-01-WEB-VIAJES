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

document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todas las tarjetas de recetas venecianas
    document.querySelectorAll('.delicia-veneciana-card').forEach(card => {
        card.addEventListener('click', () => {
            // Obtener la información de los atributos de datos de la tarjeta
            const title = card.getAttribute('data-title');
            const ingredients = card.getAttribute('data-ingredients').split(','); // Convertir ingredientes en lista
            const instructions = card.getAttribute('data-instructions');

            // Insertar el título de la receta en el modal
            document.querySelector('.receta-title').innerText = title;

            // Llenar la lista de ingredientes en el modal
            const ingredientesList = document.querySelector('.ingredientes-list');
            ingredientesList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos ingredientes
            ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.innerText = ingredient.trim(); // Agregar cada ingrediente como un elemento de lista
                ingredientesList.appendChild(li);
            });

            // Insertar las instrucciones en el modal
            document.querySelector('.instructions').innerText = instructions;

            // Mostrar el modal
            const modal = document.querySelector('.modal');
            modal.style.display = 'flex'; // Usar flex para mostrar el modal
        });
    });

    // Cerrar el modal al hacer clic en el botón "X"
    const closeButton = document.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Detener la propagación del evento
            const modal = document.querySelector('.modal');
            modal.style.display = 'none'; // Ocultar el modal
        });
    }

    // Cerrar el modal al hacer clic fuera de él
    document.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal');
        if (event.target === modal) {
            modal.style.display = 'none'; // Ocultar el modal al hacer clic fuera
        }
    });
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


// TIEMPO
document.addEventListener('DOMContentLoaded', function() {
    const filterInput = document.getElementById('monthFilter');
    const cards = document.querySelectorAll('.clima-card');
    
    filterInput.addEventListener('input', function(e) {
        const filter = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const month = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = month.includes(filter) ? 'block' : 'none';
        });
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


function abrirReceta(id) {
    document.getElementById(id).classList.add('active');
}

function cerrarReceta(id) {
    document.getElementById(id).classList.remove('active');
}





//COMIDA ITALIA

document.addEventListener("DOMContentLoaded", function() {
    const platoItems = document.querySelectorAll('.plato-item');
    const modal = document.getElementById('modalPlato');
    const modalTitulo = document.getElementById('modalTituloPlato');
    const modalIngredientes = document.getElementById('modalIngredientesPlato');
    const modalInstrucciones = document.getElementById('modalInstruccionesPlato');
    const closeBtn = document.querySelector('.close-btn');

    // Mostrar modal con información del plato al hacer clic
    platoItems.forEach(item => {
        item.addEventListener('click', function() {
            // Obtener datos del plato
            const titulo = this.getAttribute('data-titulo');
            const ingredientes = this.getAttribute('data-ingredientes');
            const instrucciones = this.getAttribute('data-instrucciones');
            
            // Llenar el modal con la información
            modalTitulo.textContent = titulo;
            modalIngredientes.innerHTML = ingredientes.split('\n').map(ing => `<li>${ing.trim()}</li>`).join('');
            modalInstrucciones.textContent = instrucciones;

            // Mostrar el modal
            modal.style.display = 'flex'; // Mostrar el modal
            setTimeout(() => {
                modal.style.opacity = 1; // Para la transición de aparición
            }, 10);
        });
    });

    // Cerrar el modal
    closeBtn.addEventListener('click', function() {
        modal.style.opacity = 0; // Para la transición de desaparición
        setTimeout(() => {
            modal.style.display = 'none'; // Ocultar el modal después de la transición
        }, 300);
    });

    // Cerrar el modal al hacer clic fuera de la caja
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.opacity = 0; // Para la transición de desaparición
            setTimeout(() => {
                modal.style.display = 'none'; // Ocultar el modal después de la transición
            }, 300);
        }
    });
});
