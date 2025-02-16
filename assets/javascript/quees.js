/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL QUEES*/
sr.reveal('.quees__img', {});
sr.reveal('.quees__subtitulo', { delay: 400 });
sr.reveal('.quees__texto', { delay: 400 });

/*SCROLL BENEFICIOS*/
sr.reveal('.beneficios__container', { interval: 200 });
sr.reveal('.card', { interval: 200 });