const kontaktniFormular = document.querySelector("#kontakniFormular");
const errorMsg = document.querySelector("#errorMsg");

kontaktniFormular.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(kontaktniFormular);
  errorMsg.innerText = "";

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
}
function handleError(errMsg) {
  //event.preventDefault();
  console.error("Error:", errMsg);
  errorMsg.innerText = "Chyba, zkuste to znovu.";
  errorMsg.style.display = "block";
}