const kontaktniFormular = document.querySelector("#kontakniFormular");
const errorMsg = document.querySelector("#errorMsg");

kontaktniFormular.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(kontaktniFormular);
  const captchaResponse = "placeholder"; //grecaptcha.getResponse();
  if (!captchaResponse.length > 0) {
    errorMsg.innerText = "Vyplňte prosím captcha test.";
    errorMsg.style.display = "block";
  } else {
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
  }
});

function handleSuccess() {
  console.log("success!");
}
