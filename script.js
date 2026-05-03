// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
const nav = document.querySelector('nav');
ScrollTrigger.create({
    start: "top -50",
    onUpdate: (self) => {
        if (self.direction === 1) { // Scrolling down
            gsap.to(nav, {
                padding: '0.6rem 0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                duration: 0.3,
                overwrite: 'auto'
            });
        } else if (self.scroll() < 50) { // Near top
            gsap.to(nav, {
                padding: '1rem 0',
                boxShadow: 'none',
                duration: 0.3,
                overwrite: 'auto'
            });
        }
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
const tlHero = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });

tlHero.from('.hero-content h1', { opacity: 0, y: 30, duration: 1 })
      .from('.hero-content p', { opacity: 0, y: 20, duration: 0.8 }, "-=0.7")
      .from('.hero-btns', { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
      .from('.hero-image', { opacity: 0, scale: 0.98, duration: 1.2, clearProps: "all" }, "-=0.8");

// Section Headings Reveal
const sectionTitles = document.querySelectorAll('.section-title, .ai-content');
sectionTitles.forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            once: true
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
    });
});

// Portfolio Cards Reveal - Batching for better performance
ScrollTrigger.batch(".portfolio-card", {
    onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
    }),
    start: "top 85%",
    once: true
});

// AI Visual Interaction
gsap.from('.chat-message', {
    scrollTrigger: {
        trigger: '.ai-visual',
        start: "top 80%",
        once: true
    },
    opacity: 0,
    x: 20,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
    clearProps: "all"
});

// Pricing Cards Reveal
ScrollTrigger.batch(".pricing-card", {
    onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all"
    }),
    start: "top 85%",
    once: true
});

// Floating Hero Image
gsap.to('.hero-image', {
    y: -12,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Refresh on load
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
