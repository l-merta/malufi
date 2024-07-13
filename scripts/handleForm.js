const kontaktniFormular = document.querySelector("#kontakniFormular");
const errorMsg = document.querySelector("#errorMsg");

kontaktniFormular.addEventListener("submit", function (event) {
  event.preventDefault();
  if(document.querySelector(".submitCont").classList.contains("submitCont-load"))
    return;

  const formData = new FormData(kontaktniFormular);
  errorMsg.innerText = "";
  //
  kontaktniFormular.querySelector(".submit").value = "";
  kontaktniFormular.querySelector(".submitCont").classList.add("submitCont-load");
  //

  fetch("php/contactForm.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        handleSuccess();
      } else {
        handleError(data.error);
      }
    })
    .catch((error) => {
      handleError(error.message);
    });
});

function handleSuccess() {
  //event.preventDefault();
  document.querySelector(".formCont").classList.add("formCont-sent")
  kontaktniFormular.querySelector(".submit").value = "Odeslat";
  kontaktniFormular.querySelector(".submitCont").classList.remove("submitCont-load");
}
function handleError(errMsg) {
  //event.preventDefault();
  //console.error("Error: " + errMsg);
  errorMsg.innerText = "Chyba, zkuste to znovu.";
  errorMsg.style.display = "block";
  kontaktniFormular.querySelector(".submit").value = "Odeslat";
  kontaktniFormular.querySelector(".submitCont").classList.remove("submitCont-load");
}