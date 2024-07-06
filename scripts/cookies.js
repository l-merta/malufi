const cookie = document.querySelector(".cookie");

function zapnoutCookie() {
  //tady :D
  console.log("zapnuto");
}
function showCookie(state) {
  console.log(state);
  if(state)
    cookie.classList = "cookie";
  else 
    cookie.classList = "cookie cookie-close";
}