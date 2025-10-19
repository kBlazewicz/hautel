// static/js/scroll-effects.js
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stagger client testimonials/gallery items
                if (entry.target.classList.contains('clients-grid') || entry.target.classList.contains('hotel-gallery-wrapper')) {
                    const children = entry.target.querySelectorAll('.client-testimonial, .gallery-item');
                    children.forEach((child, index) => {
                        child.style.transitionDelay = `${index * 0.1}s`; // Stagger delay
                        child.classList.add('is-visible'); // If child itself is a fade-in element
                    });
                }
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    // Handle scroll for horizontal gallery to potentially highlight current item or other effects
    const hotelGalleryWrapper = document.querySelector('.hotel-gallery-wrapper');
    if (hotelGalleryWrapper) {
        hotelGalleryWrapper.addEventListener('scroll', () => {
            // You could add logic here to e.g. change opacity of side items
            // or update an indicator for current image. For now, it's just scrolling.
        });
    }
});

const header = document.querySelector('.site-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) { // Add shadow after scrolling down 10px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}