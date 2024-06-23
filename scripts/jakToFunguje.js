const lineCont = document.querySelector(".postup .cont .lineCont");
const line = lineCont.querySelector(".line");
const innerLine = line.querySelector(".innerLine");

function updateInnerLine() {
  let height = (line.getBoundingClientRect().top - (window.innerHeight/2 + 150)) * -1;
  if(height < 0)
    height = 0;
  innerLine.style.height = height+0+"px";
}

window.addEventListener('scroll', () => {
  updateInnerLine();
});