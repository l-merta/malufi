const kontaktniFormular = document.querySelector("#kontakniFormular");
const errorMsg = document.querySelector("#errorMsg");

kontaktniFormular.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(kontaktniFormular);

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
  console.log("success!");
  errorMsg.innerText = "odeslano!";
  errorMsg.style.display = "block";
}
function handleError(errMsg) {
  console.error("Error:", errMsg);
  errorMsg.innerText = "Chyba, zkuste to znovu.";
  errorMsg.style.display = "block";
}