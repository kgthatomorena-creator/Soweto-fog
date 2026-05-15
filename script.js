// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Quote Form Handler
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = quoteForm.querySelector('input[name="name"]').value;
        const phone = quoteForm.querySelector('input[name="phone"]').value;
        const service = quoteForm.querySelector('select[name="service"]').value;
        const details = quoteForm.querySelector('textarea[name="details"]').value;
        
        const whatsappMessage = `Hi Soweto Fog!%0A%0A` +
            `🐛 FUMIGATION REQUEST%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(phone)}%0A` +
            `Service: ${encodeURIComponent(service)}%0A` +
            `Details: ${encodeURIComponent(details || 'None')}`;
        
        window.open(`https://wa.me/27725931748?text=${whatsappMessage}`, '_blank');
        quoteForm.reset();
        alert('Opening WhatsApp...');
    });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .price-card, .why-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Smoke effect animation
const createSmokeParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'smoke-particle';
    particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        background: radial-gradient(circle, rgba(168, 168, 168, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        bottom: -100px;
        pointer-events: none;
        z-index: 1;
        animation: smokeRise ${Math.random() * 10 + 15}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
    `;
    document.body.appendChild(particle);
};

// Add smoke animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes smokeRise {
        0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            transform: translateY(-100vh) scale(2) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create smoke particles
for (let i = 0; i < 5; i++) {
    createSmokeParticle();
}

console.log('💨 Soweto Fog - The Clean Cloud Descending to Disinfect Every Surface 🐛');
