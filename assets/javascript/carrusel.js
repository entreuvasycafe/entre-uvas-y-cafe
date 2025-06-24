/* SLIDER HOGAR */


const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;
let timer;

function showSlide(i) {
  [...slides].forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function updateIndicator() {
  [...indicator.children].forEach(dot => dot.classList.remove("active"));
  indicator.children[index].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
  updateIndicator();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  updateIndicator();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 8000);
}

function createIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.textContent = i + 1;
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
      updateIndicator();
      resetTimer();
    });
    if (i === 0) dot.classList.add("active");
    indicator.appendChild(dot);
  }
}

prev.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

next.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

createIndicator();
timer = setInterval(nextSlide, 8000);
