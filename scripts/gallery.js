// gallery.js

document.addEventListener('DOMContentLoaded', () => {
  let slides = document.querySelectorAll('.weby .slides .web');
  const dots = document.querySelectorAll('.dots .dot');
  let currentIndex = 1;
  let dirRight = true;
  let slideInterval;

  showSlide(3);
  function showSlide(index) {
    const odlevahele = -(index-3) * 43.5; //width 38 + gap 5.5
    slides.forEach((slide, i) => {
      slides[i].style = "left: "+odlevahele+"em;";
    });
    dots.forEach(dot => dot.classList.remove('active'));
    if(index != slides.length)
      dots[index].classList.add('active');
    currentIndex = index;
  }

  function nextSlide() {
    //currentIndex = (currentIndex + 1) % slides.length; -- bylo předtim
    if(dirRight) {
      currentIndex++;
      if(currentIndex == slides.length-2)
        dirRight = false;
    }
    else {
      currentIndex--;
      if(currentIndex == 1)
        dirRight = true;
    }
    showSlide(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 4000); // Change slide every 3 second(s)
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if(index == slides.length-2)
        dirRight = false;
      if(index == 1)
        dirRight = true;
      showSlide(index);
      stopSlideShow();
      startSlideShow();
    });
  });

  showSlide(currentIndex);
  startSlideShow();
});
  