// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Navbar Scroll Performance Optimization
const nav = document.querySelector('nav');
ScrollTrigger.create({
    start: "top -50",
    onToggle: self => {
        gsap.to(nav, {
            padding: self.isActive ? '0.6rem 0' : '1rem 0',
            backgroundColor: self.isActive ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
            boxShadow: self.isActive ? '0 10px 30px rgba(0,0,0,0.04)' : 'none',
            duration: 0.4,
            ease: "power2.out"
        });
    }
});

// Hero Entrance Animation - Ultra Smooth
const tlHero = gsap.timeline({ defaults: { ease: "expo.out", force3D: true } });

tlHero.from('.hero-content .badge', { opacity: 0, y: 30, duration: 1.2 })
      .from('.hero-content h1', { opacity: 0, y: 50, duration: 1.5 }, "-=1")
      .from('.hero-content p', { opacity: 0, y: 30, duration: 1.2 }, "-=1.2")
      .from('.hero-btns .btn', { opacity: 0, y: 20, stagger: 0.2, duration: 1 }, "-=1")
      .from('.hero-image', { opacity: 0, scale: 0.9, duration: 2 }, "-=1.5");

// Section Reveals - Staggered Slide & Fade
const revealSections = document.querySelectorAll('section');
revealSections.forEach(section => {
    if (section.classList.contains('hero')) return;

    const heading = section.querySelector('.section-title, .ai-content');
    if (heading) {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 85%",
                once: true
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out"
        });
    }
});

// Portfolio Card Reveal - Optimized Batching
ScrollTrigger.batch(".portfolio-card", {
    onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        clearProps: "all"
    }),
    start: "top 85%",
    once: true
});

// AI Chat Interaction Reveal
gsap.from('.chat-message', {
    scrollTrigger: {
        trigger: '.ai-visual',
        start: "top 80%",
        once: true
    },
    opacity: 0,
    x: 40,
    stagger: 0.3,
    duration: 1,
    ease: "back.out(1.7)",
    clearProps: "all"
});

// Pricing Card Reveal - Optimized Batching
ScrollTrigger.batch(".pricing-card", {
    onEnter: batch => gsap.from(batch, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        clearProps: "all"
    }),
    start: "top 85%",
    once: true
});

// Floating Subtle Animation for Hero Image
gsap.to('.hero-image', {
    y: -15,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Hover Interactions using GSAP for Cards (Optional, but adds premium feel)
document.querySelectorAll('.portfolio-card, .pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.08)', duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, boxShadow: '0 10px 20px rgba(0,0,0,0.02)', duration: 0.4, ease: "power2.out" });
    });
});

// Smooth scroll refresh
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
