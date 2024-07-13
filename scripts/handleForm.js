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
        errorMsg.innerText = "Chyba: " + data.error;
        errorMsg.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error:", error.message);
      errorMsg.innerText = "Chyba, zkuste to znovu.";
      errorMsg.style.display = "block";
    });
});

function handleSuccess() {
  console.log("success!"); //smazat, smazat
  errorMsg.innerText = "odeslano!"; //smazat
  errorMsg.style.display = "block"; //smazat
}

function handleError() {
  console.log("error");
}
console.log("test");