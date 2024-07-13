document.addEventListener("DOMContentLoaded", function () {
  const consentBanner = document.querySelector(".cookie");
  const cookieCheckbox = document.querySelector("cookie-checkbox");

  // Function to accept cookies
  window.zapnoutCookie = function () {
    setCookie("userConsent", "true", 365);
  };

  // Check if user has already given consent
  if (getCookie("userConsent")) {
    if (consentBanner) {
      consentBanner.classList = "cookie cookie-close";
    }
    if (cookieCheckbox) {
      cookieCheckbox.checked = true;
    }
  } else {
    if (cookieCheckbox) {
      cookieCheckbox.checked = false;
    }
  }

  // Function to accept cookies
  window.acceptCookies = function () {
    setCookie("userConsent", "true", 365);
    if (cookieCheckbox) {
      cookieCheckbox.checked = true;
    }
  };

  // Function to hide the cookie banner
  window.showCookie = function (state) {
    if (consentBanner) {
      if (state) consentBanner.classList = "cookie";
      else consentBanner.classList = "cookie cookie-close";
    }
  };

  // Function to toggle cookies based on checkbox state
  window.toggleCookies = function () {
    if (cookieCheckbox) {
      if (cookieCheckbox.checked) {
        setCookie("userConsent", "true", 365);
      } else {
        setCookie("userConsent", "", -1); // Delete the cookie
      }
    }
  };

  // Function to set a cookie
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // Function to get a cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});
