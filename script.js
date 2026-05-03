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

// Section Headings Reveal
const sectionTitles = document.querySelectorAll('.section-title, .ai-content');
sectionTitles.forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 85%",
            once: true
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
    });
});

// Portfolio Cards Reveal
document.querySelectorAll('.portfolio-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// AI Visual Interaction
document.querySelectorAll('.ai-visual div').forEach((div, i) => {
    gsap.from(div, {
        scrollTrigger: {
            trigger: div,
            start: "top 80%",
            once: true
        },
        opacity: 0,
        x: 30,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// Pricing Cards Reveal
document.querySelectorAll('.pricing-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
            once: true
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power2.out"
    });
});

// Floating Hero Image
gsap.to('.hero-image', {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Refresh ScrollTrigger on load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
