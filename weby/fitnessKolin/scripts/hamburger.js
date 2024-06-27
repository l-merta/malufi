const hamMenu = document.querySelector(".hamMenu");
let hmState = false;

function showHamMenu()
{
  hmState = !hmState;
  if(hmState) {
    hamMenu.style = "left: 0";
  }
  else {
    hamMenu.style = "left: 100vw";
  }
}