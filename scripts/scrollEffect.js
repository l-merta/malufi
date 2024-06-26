const pjsbg = []; //particles-js-bg
pjsbg.push(document.querySelector("#particles-js-bg-l"));
pjsbg.push(document.querySelector("#particles-js-bg-r"));

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  //pjsbg[0].style = "top: "+scrollValue+";";
  //pjsbg[1].style = "top: "+scrollValue+";";
});