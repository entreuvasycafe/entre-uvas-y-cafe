document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.opinion__card');
        const prevBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        let current = 0;
        let interval;

        function showSlide(index) {
            cards.forEach((card, i) => {
                card.classList.remove('visible');
            });
            cards[index].classList.add('visible');
        }

        function nextSlide() {
            current = (current + 1) % cards.length;
            showSlide(current);
        }

        function prevSlide() {
            current = (current - 1 + cards.length) % cards.length;
            showSlide(current);
        }

        function startAutoSlide() {
            interval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });

            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
        }

        // Mostrar la primera tarjeta
        showSlide(current);
        startAutoSlide();
    }
});
