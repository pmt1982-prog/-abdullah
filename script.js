// Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon to 'X' when open
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Form Submission (Visual Feedback)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = "Sending...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            alert('Message simulated! Connect your form to Formspree for real emails.');
            btn.innerHTML = originalText;
            btn.style.opacity = "1";
            contactForm.reset();
        }, 1500);
    });
}

// Console Easter Egg
console.log("%c Abdullah Portfolio v2.0 ", "color: #3b82f6; font-weight: bold; font-size: 18px;");
console.log("Status: Learning C Language... [DONE]");
