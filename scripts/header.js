const header = document.querySelector('header');
const firstWhite = document.querySelector('main').scrollHeight - (10 * 16) - (6 * 16);
//console.log(firstWhite);

window.addEventListener('scroll', function() {
  console.log("scroll");
  console.log(window.pageYOffset, firstWhite);
  if (window.pageYOffset > firstWhite) {
    header.style = "color: var(--c1);";
    header.querySelector("nav .spec").style = "border-color: var(--c1);";
  } else {
    header.style = "color: var(--c2);";
    header.querySelector("nav .spec").style = "border-color: var(--c2);";
  }
});
//document.addEventListener('resize', ()=>{sticky = header.offsetTop;});

// novej koment