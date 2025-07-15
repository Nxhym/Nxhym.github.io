a// Efecto de partículas para fondo (opcional)
document.addEventListener('DOMContentLoaded', () => {
    // Resaltar enlace activo
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.side-nav a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Efecto hover para tarjetas
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'none';
            item.style.boxShadow = 'none';
        });
    });

    // Animación de carga
    gsap.from('.profile-pic-container', {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
    });
});// Efecto hover para elementos glass
document.querySelectorAll('.glass').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-5px)';
        element.style.boxShadow = '0 15px 30px rgba(31, 38, 135, 0.3)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'none';
        element.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.2)';
    });
});

// Resaltar enlace activo
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.bottom-nav a').forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});