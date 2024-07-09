const formCont = document.querySelector(".formCont");

function showForm(state) {
  if(state) {
    formCont.classList = "formCont formCont-appear";
  }
  else {
    formCont.classList = "formCont formCont-close";
  }
}