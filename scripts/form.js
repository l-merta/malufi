const formCont = document.querySelector(".formCont");

function showForm(state, typ) {
  if(state) {
    formCont.classList = "formCont formCont-appear";
  }
  else {
    formCont.classList = "formCont formCont-close";
  }
  //
  const options = formCont.querySelectorAll("form option");
  options.forEach(opt => {
    opt.removeAttribute("selected");
  });
  options[typ].setAttribute("selected", "");
}