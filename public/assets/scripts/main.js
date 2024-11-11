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

// Configuración adicional para integrarse con el HTML actualizado
// Añadir clases activas en la carga inicial según la URL actual
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
});

// Validación de la búsqueda
const searchInput = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', function(e) {
    if (!searchInput.value.trim()) {
        e.preventDefault();
        searchInput.classList.add('error');
        setTimeout(() => {
            searchInput.classList.remove('error');
        }, 2000);
    }
});

searchInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        this.classList.remove('error');
    }
});

//Sistema de testimonios - Sección INICIO                N O   M O D I F I C A R
function initializeTestimonials() {
    const testimonios = document.querySelectorAll('.testimonio');
    let testimonioActual = 0;

    // Oculta todos los testimonios excepto el primero
    testimonios.forEach((testimonio, index) => {
        testimonio.style.opacity = index === 0 ? '1' : '0';
        testimonio.style.position = 'absolute';
        testimonio.style.transition = 'all 0.5s ease';
    });

    function rotarTestimonios() {
        // Oculta el testimonio actual
        testimonios[testimonioActual].style.opacity = '0';
        
        // Actualiza el índice al siguiente testimonio
        testimonioActual = (testimonioActual + 1) % testimonios.length;
        
        // Muestra el nuevo testimonio
        testimonios[testimonioActual].style.opacity = '1';
    }

    // Inicia la rotación automática
    setInterval(rotarTestimonios, 5000);
}

// Animaciones de scroll                                 N O   M O D I F I C A R
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

// Efectos hover en las funcionalidades                  N O   M O D I F I C A R
function initializeFuncionalidades() {
    document.querySelectorAll('.funcionalidad').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
}

//Navegación SPA - Para que no se se creen nuevas páginas al ir a una sección u otra
//                                                      N O   M O D I F I C A R
function handleNavigation(event) {
    event.preventDefault();
    const path = event.currentTarget.getAttribute('href');
    
    // Añade animación de salida
    document.querySelector('main').classList.add('page-transition');
    
    // Actualiza la URL sin recargar la página
    history.pushState({}, '', path);
    
    // Carga el nuevo contenido
    loadContent(path);
    
    // Actualiza el menú
    updateActiveMenu(path);
}

//                                                      N O   M O D I F I C A R
async function loadContent(path) {
    try {
        const mainContent = document.querySelector('main');
        mainContent.innerHTML = '<div class="loading">Cargando...</div>';
        
        const response = await fetch(`${path}`);
        if (!response.ok) throw new Error('Error al cargar el contenido');
        const html = await response.text();
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const newContent = tempDiv.querySelector('main')?.innerHTML || html;
        
        setTimeout(() => {
            mainContent.innerHTML = newContent;
            mainContent.classList.remove('page-transition');
            
            // Reinicializa todas las características
            initializePageFeatures();
        }, 300);
    } catch (error) {
        console.error('Error:', error);
        mainContent.innerHTML = `
            <div class="error">
                <h2>Error al cargar el contenido</h2>
                <p>${error.message}</p>
            </div>
        `;
    }
}

//                                                      N O   M O D I F I C A R
function updateActiveMenu(path) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[href="${path}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Inicialización de características de la página       N O   M O D I F I C A R
function initializePageFeatures() {
    // Inicializa observadores para animaciones de scroll
    document.querySelectorAll('.funcionalidades-section, .valores-banner, .testimonios')
        .forEach(section => observador.observe(section));
    
    // Inicializa efectos hover en funcionalidades
    initializeFuncionalidades();
    
    // Inicializa el carrusel de testimonios
    initializeTestimonials();
}

// Manejadores de eventos para la navegación            N O   M O D I F I C A R
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Manejo del botón atrás/adelante del navegador       N O   M O D I F I C A R
window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
    updateActiveMenu(window.location.pathname);
});

// PARA CONÓCENOS                                      N O   M O D I F I C A R
function initializeConocenosAnimations() {
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    document.querySelectorAll('.conocenos-content').forEach(section => {
        observador.observe(section);
    });
}

// Inicialización cuando se carga la página            N O   M O D I F I C A R
document.addEventListener('DOMContentLoaded', function() {
    
    // Carga inicial del contenido
    loadContent(window.location.pathname);
    
    // Inicializa las características de la página
    initializePageFeatures();

    initializeConocenosAnimations();
});

// Scroll suave para enlaces internos
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Manejo de enlaces internos
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        smoothScroll(e.target.getAttribute('href'));
    }
});

// Efecto en header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
