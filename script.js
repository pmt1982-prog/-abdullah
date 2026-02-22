// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#050505';
        navLinks.style.padding = '2rem';
    });
}

// Form Alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message received! Abdullah will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Animation Trigger (Simple)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;
        if (top >= offset) {
            sec.style.opacity = '1';
            sec.style.transform = 'translateY(0)';
        }
    });
});
