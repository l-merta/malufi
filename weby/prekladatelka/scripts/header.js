const header = document.querySelector('header');
const kurzyNav = document.querySelector('.kurzyNav');
const navMobile = document.querySelector('.navMobile');
let sticky = header.offsetTop;
let kurzyNavState = false;
let navMobileState = false;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-sticky");
    kurzyNav.classList.add("kurzyNav-sticky");
  } else {
    header.classList.remove("header-sticky");
    kurzyNav.classList.remove("kurzyNav-sticky");
  }
});
document.addEventListener('resize', ()=>{sticky = header.offsetTop;});

function showKurzyNav() {
  kurzyNavState = !kurzyNavState;
  if(kurzyNavState) {
    header.querySelector("nav .link img").style = "transform: rotate(180deg);";
    kurzyNav.querySelector(".kurzyNav .linkCont").style = "margin-top: -0em;";
  }
  else {
    header.querySelector("nav .link img").style = "transform: rotate(0deg);";
    kurzyNav.querySelector(".kurzyNav .linkCont").style = "margin-top: -8em;";
  }
}
function showNavMobile() {
  navMobileState = !navMobileState;
  if(navMobileState) {
    navMobile.style = "left: 0vw;";
  }
  else {
    navMobile.style = "left: 100vw;";
  }
}