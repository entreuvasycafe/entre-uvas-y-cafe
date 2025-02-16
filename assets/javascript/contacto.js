/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL CONTACTO*/
sr.reveal('.seccion-titulo', {});
sr.reveal('.container__contacto', { delay: 400 });
sr.reveal('.contact__form', { interval: 200 });
sr.reveal('.contact__input', { interval: 200 });
sr.reveal('.contact__button', { delay: 600 });

document.getElementById('enviar').addEventListener('click', function () {
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;

    console.log('Nombre:', nombre);
    console.log('Mensaje:', mensaje);

    var texto = `¡Hola!, me llamo ${nombre}, quería consultar ${mensaje}`;
    var url = `https://wa.me/56984230531?text=${texto}`;

    console.log('URL:', url);

    window.open(url, '_blank');
});