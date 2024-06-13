const slides = document.querySelector(".weby .slides");
const dots = document.querySelector(".weby .dots");

const webs = [
  "https://unsplash.it/2560/1440",
  "https://unsplash.it/2561/1441",
  "https://unsplash.it/2562/1442",
  "https://unsplash.it/2563/1443",
  "https://unsplash.it/2564/1444"
];
///

renderWebs();
renderDots();

function renderWebs() {
  for(let i = 0; i < webs.length; i++) {
    const nWeb = slides.querySelector('.webDef').cloneNode(true);
    nWeb.classList = "web";
    nWeb.querySelector("img").src = webs[i];
    slides.appendChild(nWeb, slides.children[slides.children.length]);
  }
}

function renderDots() {
  for (let i = 0; i < webs.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('data-index', `${i}`);
    dots.appendChild(dot);
  }
}