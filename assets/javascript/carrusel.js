const carousel = document.getElementById('carouselHome');

carousel.addEventListener('slide.bs.carousel', () => {
  // Remueve las clases de animación usadas en tu HTML
  const animatedElements = carousel.querySelectorAll('.animate__zoomIn');
  animatedElements.forEach(el => {
    el.classList.remove('animate__zoomIn', 'animate__zoomIn');
    // Trigger reflow para reiniciar animación
    void el.offsetWidth;
  });
});

carousel.addEventListener('slid.bs.carousel', () => {
  // Añade las clases para animar el nuevo slide según tus clases actuales
  const activeSlide = carousel.querySelector('.carousel-item.active');
  const h4 = activeSlide.querySelector('h4');
  const p = activeSlide.querySelector('p');
  const btn = activeSlide.querySelector('a.btn');

  h4.classList.add('animate__zoomIn');
  p.classList.add('animate__zoomIn');
  btn.classList.add('animate__zoomIn');
});

// Al cargar la página, anima el slide activo inicial
window.addEventListener('load', () => {
  const activeSlide = carousel.querySelector('.carousel-item.active');
  activeSlide.querySelector('h4').classList.add('animate__zoomIn');
  activeSlide.querySelector('p').classList.add('animate__zoomIn');
  activeSlide.querySelector('a.btn').classList.add('animate__zoomIn');
});
