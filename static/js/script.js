// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Hero image loading logic
    const heroImage = document.querySelector('.hero-image');
    const heroFallback = document.querySelector('.hero-image-fallback');
    
    if (heroImage && heroFallback) {
        heroImage.addEventListener('load', function() {
            // Image loaded successfully, hide fallback
            this.classList.add('loaded');
            heroFallback.style.display = 'none';
        });
        
        heroImage.addEventListener('error', function() {
            // Image failed to load, show fallback
            this.style.display = 'none';
            heroFallback.style.display = 'flex';
        });
        
        // Check if image is already cached
        if (heroImage.complete && heroImage.naturalHeight !== 0) {
            heroImage.classList.add('loaded');
            heroFallback.style.display = 'none';
        }
    }

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Journey Timeline Interactions
document.addEventListener('DOMContentLoaded', function() {
    const journeySteps = document.querySelectorAll('.journey-step');
    
    journeySteps.forEach((step, index) => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            journeySteps.forEach(s => s.classList.remove('active'));
            // Add active class to clicked step
            this.classList.add('active');
        });
    });

    // Auto-advance journey steps
    let currentStep = 0;
    const autoAdvance = setInterval(() => {
        journeySteps.forEach(s => s.classList.remove('active'));
        journeySteps[currentStep].classList.add('active');
        currentStep = (currentStep + 1) % journeySteps.length;
    }, 4000);

    // Pause auto-advance on hover
    journeySteps.forEach(step => {
        step.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    });
});

// Animate on Scroll (AOS) Implementation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Counter Animation
function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 20);
        } else {
            counter.textContent = target;
        }
    };
    
    updateCounter();
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS elements
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(el => {
        observer.observe(el);
    });

    // Initialize other animated elements
    const animateElements = document.querySelectorAll('.about-card, .flow-node, .counter-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation when in view
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.counter-number');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    const counterItems = document.querySelectorAll('.counter-item');
    counterItems.forEach(item => {
        counterObserver.observe(item);
    });
});

// Enhanced Card Interactions
document.addEventListener('DOMContentLoaded', function() {
    const aboutCards = document.querySelectorAll('.about-card');
    
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Flow Node Interactions
document.addEventListener('DOMContentLoaded', function() {
    const flowNodes = document.querySelectorAll('.flow-node');
    
    flowNodes.forEach((node, index) => {
        node.addEventListener('mouseenter', function() {
            // Highlight the flow path
            const arrows = document.querySelectorAll('.flow-arrow');
            arrows.forEach((arrow, arrowIndex) => {
                if (arrowIndex >= index && arrowIndex < flowNodes.length - 1) {
                    arrow.style.animation = 'data-flow 1s ease-in-out infinite';
                }
            });
        });
        
        node.addEventListener('mouseleave', function() {
            const arrows = document.querySelectorAll('.flow-arrow');
            arrows.forEach(arrow => {
                arrow.style.animation = 'data-flow 3s ease-in-out infinite';
            });
        });
    });
});

// Parallax Effect for Background Elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-pattern, .about::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading effect
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading effect and additional animations
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded) .hero-content > * {
        opacity: 0;
        transform: translateY(30px);
    }
    
    body.loaded .hero-content > * {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    body.loaded .hero-title {
        transition-delay: 0.2s;
    }
    
    body.loaded .hero-subtitle {
        transition-delay: 0.4s;
    }
    
    body.loaded .hero-buttons {
        transition-delay: 0.6s;
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Enhanced scroll animations */
    .about-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .flow-node {
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .journey-step {
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;
document.head.appendChild(style); 