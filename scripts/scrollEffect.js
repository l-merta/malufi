const pjsbg = []; //particles-js-bg
pjsbg.push(document.querySelector("#particles-js-bg-l"));
pjsbg.push(document.querySelector("#particles-js-bg-r"));

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  console.log(scrollValue);
  pjsbg[0].style = "top: "+(scrollValue * 0.2)+"px;";
  pjsbg[1].style = "top: "+(scrollValue * 0.2)+"px;";
});