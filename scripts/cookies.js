const cookie = document.querySelector(".cookie");

function zapnoutCookie() {
  //tady :D
}
function showCookie(state) {
  if(state)
    cookie.classList = "cookie";
  else 
    cookie.classList = "cookie cookie-close";
}