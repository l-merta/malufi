document.addEventListener("DOMContentLoaded", function () {
  const consentBanner = document.querySelector(".cookie-schovany");
  const cookieCheckbox = document.querySelector("#cookie-checkbox");

  // Function to accept cookies
  window.zapnoutCookie = function () {
    setCookie("userConsent", "true", 365);
    turnOnAnalytics();
  };

  // Check if user has already given consent
  if (getCookie("userConsent")) {
    if (cookieCheckbox) {
      cookieCheckbox.checked = true;
    }
    turnOnAnalytics();
  } else {
    if (consentBanner) {
      consentBanner.classList = "cookie";
    }
    if (cookieCheckbox) {
      cookieCheckbox.checked = false;
    }
  }

  // Function to accept cookies
  window.acceptCookies = function () {
    setCookie("userConsent", "true", 365);
    turnOnAnalytics();
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
        turnOnAnalytics();
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

let scriptsAdded = false;

function turnOnAnalytics() {
  if (scriptsAdded) {
    //console.log("Google Tag Manager scripts have already been added.");
    return;
  }

  // Create the first script element
  var script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-BK92T8BPL4";
  document.head.appendChild(script1);

  // Create the second script element with the inline code
  var script2 = document.createElement("script");
  script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BK92T8BPL4');
    `;
  document.head.appendChild(script2);

  scriptsAdded = true;
  //console.log("Google Tag Manager scripts have been added.");
}
