// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        gsap.to(nav, {
            padding: '0.6rem 0',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            duration: 0.3
        });
    } else {
        gsap.to(nav, {
            padding: '1rem 0',
            boxShadow: 'none',
            duration: 0.3
        });
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Hero Section Entrance Animation
const tlHero = gsap.timeline({ defaults: { ease: "power3.out" } });

tlHero.from('.hero-content .badge', { opacity: 0, y: 20, duration: 0.8 })
      .from('.hero-content h1', { opacity: 0, y: 30, duration: 1 }, "-=0.6")
      .from('.hero-content p', { opacity: 0, y: 20, duration: 0.8 }, "-=0.8")
      .from('.hero-btns', { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
      .from('.hero-image', { opacity: 0, scale: 0.95, duration: 1.2 }, "-=0.8");

// Scroll Reveal for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    // skip hero as it has its own entrance
    if (section.classList.contains('hero')) return;

    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    });
});

// Staggered Reveal for Portfolio Cards
gsap.from('.portfolio-card', {
    scrollTrigger: {
        trigger: '.portfolio-grid',
        start: "top 80%"
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

// Staggered Reveal for Pricing Cards
gsap.from('.pricing-card', {
    scrollTrigger: {
        trigger: '.pricing-grid',
        start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

// AI Visual Interaction
gsap.from('.ai-visual div', {
    scrollTrigger: {
        trigger: '.ai-visual',
        start: "top 70%"
    },
    opacity: 0,
    x: 30,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
});

// Floating Hero Image (Replaces CSS animation for more control)
gsap.to('.hero-image', {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});
