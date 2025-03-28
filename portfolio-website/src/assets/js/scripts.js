document.addEventListener('DOMContentLoaded', () => {
    // Initialize GLightbox
    const lightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('.scrollto');
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize Swiper for testimonials
    const swiper = new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

    // Initialize PureCounter for counters
    new PureCounter();

    // Typed.js for hero subtitle
    const typed = new Typed('.typed', {
        strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });
});
