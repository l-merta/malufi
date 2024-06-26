const maxWidth = 1100;

checkResponsivity();
addEventListener("resize", checkResponsivity);

function checkResponsivity()
{
  const screenWidth = window.innerWidth;
  //
  const orgLeftBody = document.querySelectorAll(".postup .bod-org-left"); //body co sou původně nalevo
  //
  if(screenWidth <= maxWidth) {
    //.postup
    for(let i = 0; i < orgLeftBody.length; i++) {
      orgLeftBody[i].classList.remove("bod-left");
      orgLeftBody[i].classList.add("bod-right");
    }
  }
  else {
    //.postup
    for(let i = 0; i < orgLeftBody.length; i++) {
      orgLeftBody[i].classList.add("bod-left");
      orgLeftBody[i].classList.remove("bod-right");
    }
  }
}