const header = document.querySelector('header');
const firstWhite = document.querySelector('main').scrollHeight - (10 * 16) - (6 * 16);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > firstWhite) {
    header.classList = "header-dark";
    header.querySelector("nav .spec").style = "border-color: var(--c1);";
  } else {
    header.classList = "header-light";
    header.querySelector("nav .spec").style = "border-color: var(--c2);";
  }
});
//document.addEventListener('resize', ()=>{sticky = header.offsetTop;});