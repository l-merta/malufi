// gallery.js

document.addEventListener('DOMContentLoaded', () => {
  let slides = document.querySelectorAll('.weby .slides .web');
  const dots = document.querySelectorAll('.dots .dot');
  let currentIndex = 0;
  let slideInterval;

  showSlide(1);
  function showSlide(index) {
    const odlevahele = index * 37.5; //width 32 + gap 5.5
    slides.forEach((slide, i) => {
      slides[i].style = "left: -"+odlevahele+"em;";
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 second(s)
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      stopSlideShow();
      startSlideShow();
    });
  });

  showSlide(currentIndex);
  startSlideShow();
});
  