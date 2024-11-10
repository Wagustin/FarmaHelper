// Seleccionar elementos relevantes
const addCardButton = document.querySelector('.billing-info button');
const subscriptionFreeButton = document.querySelector('.free-version');

// Validar si los elementos existen antes de agregar eventos
if (addCardButton) {
    // Funcionalidad para agregar tarjeta de crédito/débito
    addCardButton.addEventListener('click', () => {
        const cardNumber = prompt('Ingrese el número de su tarjeta de crédito o débito:');
        if (cardNumber) {
            alert('Tarjeta agregada correctamente: ' + cardNumber.slice(-4));
        } else {
            alert('No se ingresó ningún número de tarjeta.');
        }
    });
}

if (subscriptionFreeButton) {
    // Funcionalidad para cambiar de suscripción
    subscriptionFreeButton.addEventListener('click', () => {
        const confirmation = confirm('¿Está seguro que desea cambiar a la versión gratuita? Esto cancelará su suscripción Premium.');
        if (confirmation) {
            alert('Se ha cambiado a la versión gratuita con éxito.');
        }
    });
}

// Mejorar la interactividad del menú de navegación
const navLinks = document.querySelectorAll('header nav ul li a');
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Añadir clases activas en la carga inicial según la URL actual
    window.addEventListener('DOMContentLoaded', () => {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            if (link.href.includes(currentPath)) {
                link.classList.add('active');
            }
        });
    });
}
