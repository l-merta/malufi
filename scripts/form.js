const formCont = document.querySelector(".formCont");

function showForm(state, typ) {
  if(state) {
    formCont.classList.add("formCont-appear");
    formCont.classList.remove("formCont-close");
  }
  else {
    formCont.classList.add("formCont-close");
    formCont.classList.remove("formCont-appear");
  }
  //
  const options = formCont.querySelectorAll("form option");
  options.forEach(opt => {
    opt.removeAttribute("selected");
  });
  options[typ].setAttribute("selected", "");
}