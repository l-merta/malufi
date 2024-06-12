// gallery.js

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let slideInterval;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
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
      slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
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
  