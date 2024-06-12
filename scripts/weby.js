const webCont = document.querySelector(".weby .cont");
const webs = [
  "https://unsplash.it/2560/1440",
  "https://unsplash.it/2561/1441",
  "https://unsplash.it/2562/1442",
  "https://unsplash.it/2563/1443",
  "https://unsplash.it/2564/1444"
];
///

renderWebs();
function renderWebs() {
  for(let i = 0; i < webs.length; i++) {
    const nWeb = webCont.querySelector('.web').cloneNode(true);
    nWeb.classList.remove("disabled");
    nWeb.querySelector("img").src = webs[i];
    webCont.appendChild(nWeb, webCont.children[webCont.children.length]);
  }
}