const pjsbg = []; //particles-js-bg
pjsbg.push(document.querySelector("#particles-js-bg-l"));
pjsbg.push(document.querySelector("#particles-js-bg-r"));

updateScrollEffect();
function updateScrollEffect() {
  //console.log(window.innerWidth);
  if(window.innerWidth < 1100) {
    //mobil
    const scrollValue = window.innerHeight;
    pjsbg[0].style = "top: "+(scrollValue * 0.85)+"px;";
    pjsbg[1].style = "top: "+(scrollValue * 0.85)+"px;";
  }
  else {
    //kompl
    const scrollValue = window.scrollY;
    pjsbg[0].style = "top: "+(scrollValue * -0.1)+"px;";
    pjsbg[1].style = "top: "+(scrollValue * -0.1)+"px;";
  }
}
window.addEventListener('scroll', updateScrollEffect);