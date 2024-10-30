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

// Sistema de testimonios
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

// Animaciones de scroll
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.3
});

// Efectos hover en las funcionalidades
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

// Navegación SPA
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

function updateActiveMenu(path) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`nav a[href="${path}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Inicialización de características de la página
function initializePageFeatures() {
    // Inicializa observadores para animaciones de scroll
    document.querySelectorAll('.funcionalidades-section, .valores-banner, .testimonios')
        .forEach(section => observador.observe(section));
    
    // Inicializa efectos hover en funcionalidades
    initializeFuncionalidades();
    
    // Inicializa el carrusel de testimonios
    initializeTestimonials();
}

// Manejadores de eventos para la navegación
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Manejo del botón atrás/adelante del navegador
window.addEventListener('popstate', () => {
    loadContent(window.location.pathname);
    updateActiveMenu(window.location.pathname);
});

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Carga inicial del contenido
    loadContent(window.location.pathname);
    
    // Inicializa las características de la página
    initializePageFeatures();
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