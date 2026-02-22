// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Simple Form Logic
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks Abdullah! Your message has been "sent" (add Formspree to make it real).');
        contactForm.reset();
    });
}

// Fun Console Message for Developers
console.log("%c Abdullah's Portfolio ", "background: #3b82f6; color: white; font-size: 20px;");
console.log("C Language in progress... █▒▒▒▒▒▒▒▒▒ 10%");
