document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  let firstWhite = calculateFirstWhite(main);

  window.addEventListener('scroll', () => {
    handleScroll(header, firstWhite);
  });

  window.addEventListener('resize', () => {
    firstWhite = calculateFirstWhite(main);
  });

  function calculateFirstWhite(mainElement) {
    return mainElement.scrollHeight - (10 * 16) - (6 * 16);
  }

  function handleScroll(headerElement, threshold) {
    if (window.scrollY > threshold) {
      headerElement.classList.add('scrolled');
      headerElement.classList.remove('unscrolled');
    } else {
      headerElement.classList.add('unscrolled');
      headerElement.classList.remove('scrolled');
    }
  }
});




// const header = document.querySelector('header');
// const firstWhite = document.querySelector('main').scrollHeight - (10 * 16) - (6 * 16);
// //console.log(firstWhite);

// window.addEventListener('scroll', function() {
//   console.log("scroll");
//   console.log(window.pageYOffset, firstWhite);
//   if (window.pageYOffset > firstWhite) {
//     header.style = "color: var(--c1);";
//     header.querySelector("nav .spec").style = "border-color: var(--c1);";
//   } else {
//     header.style = "color: var(--c2);";
//     header.querySelector("nav .spec").style = "border-color: var(--c2);";
//   }
// });
// //document.addEventListener('resize', ()=>{sticky = header.offsetTop;});

// // novej koment