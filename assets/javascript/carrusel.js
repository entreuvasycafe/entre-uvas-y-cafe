const carousel = document.getElementById('carouselHome');

carousel.addEventListener('slide.bs.carousel', () => {
  const animatedElements = carousel.querySelectorAll('.slide-content');
  animatedElements.forEach(el => {
    el.classList.remove('animate__animated', 'animate__zoomIn', 'animate__slow');
    void el.offsetWidth; // Reinicia animación
  });
});

carousel.addEventListener('slid.bs.carousel', () => {
  const activeSlide = carousel.querySelector('.carousel-item.active .slide-content');
  if (activeSlide) {
    activeSlide.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
  }
});

window.addEventListener('load', () => {
  const activeSlide = carousel.querySelector('.carousel-item.active .slide-content');
  if (activeSlide) {
    activeSlide.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
  }
});
