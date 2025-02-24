const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  
            observer.unobserve(entry.target);  
        }
    });
}, { threshold: 0.5 }); 
const elements = document.querySelectorAll('.fade-element, .fade-in-scale');
elements.forEach(el => observer.observe(el));

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

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const texts = [
    "Developer.",
    "Learner.",
    "passionate Computer Science Student."
];

let index = 0;
const dynamicText = document.getElementById("dynamic-text");

function changeText() {
    dynamicText.classList.add("fade-out");
    setTimeout(() => {
        dynamicText.textContent = texts[index];
        dynamicText.classList.remove("fade-out");
        dynamicText.classList.add("fade-in");
        index = (index + 1) % texts.length;
    }, 500); 
}

setInterval(changeText, 2000);

window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    header.classList.add('animate-header');
    hero.classList.add('animate-hero');
});
