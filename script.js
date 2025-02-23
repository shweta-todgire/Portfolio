// Dark Mode Toggle Script
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


// Fade in elements on scroll
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const elements = document.querySelectorAll('.fade-element');
elements.forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    // Trigger the drop-down animation after the page has loaded
    header.classList.add('animate-header');
    hero.classList.add('animate-hero');
});
