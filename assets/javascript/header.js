document.querySelectorAll('#offcanvasMenu a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Evita el comportamiento por defecto

    const targetId = link.getAttribute('href').substring(1); // Quita el # para obtener id

    // Cierra el offcanvas
    const offcanvasEl = document.getElementById('offcanvasMenu');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    bsOffcanvas.hide();

    // Espera que termine el cierre del offcanvas para hacer scroll
    offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, { once: true });
  });
});