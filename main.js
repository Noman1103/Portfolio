ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .parcours-container', { origin: 'top' });
ScrollReveal().reveal('.home-img, .epreuve-container, .portfolio-box, .veille-container, .parcours-pro', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['étudiant en BTS SIO option SLAM', 'développeur FRONT-END'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
