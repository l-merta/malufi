const pjsbg = []; //particles-js-bg
pjsbg.push(document.querySelector("#particles-js-bg-l"));
pjsbg.push(document.querySelector("#particles-js-bg-r"));

updateScrollEffect();
function updateScrollEffect() {
  if(screen.height > screen.width) {
    //mobil
    const scrollValue = screen.height;
    pjsbg[0].style = "top: "+(scrollValue * 0.85)+"px;";
    pjsbg[1].style = "top: "+(scrollValue * 0.85)+"px;";
  }
  else {
    //kompl
    const scrollValue = window.scrollY;
    pjsbg[0].style = "top: "+(scrollValue * 0.4)+"px;";
    pjsbg[1].style = "top: "+(scrollValue * 0.4)+"px;";
  }
}
window.addEventListener('scroll', updateScrollEffect);