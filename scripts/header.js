const header = document.querySelector('header');
const firstWhite = document.querySelector('main').scrollHeight - (10 * 16) - (6 * 16);

window.addEventListener('scroll', recolorHeader);
recolorHeader();
function recolorHeader() {
  if (window.pageYOffset > firstWhite) {
    header.classList = "header-light";
  } else {
    header.classList = "header-dark";
  }
}
//document.addEventListener('resize', ()=>{sticky = header.offsetTop;});

let test = 'test'; // test
