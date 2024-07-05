const slides = document.querySelector(".weby .slides");
const dots = document.querySelector(".weby .dots");

const webs = [
  "images/piana.png",
  "images/fitnes.png",
  "images/melisa.png",
  "images/krystof.png",
  "images/anglictina.png"
];
const webColors = [
  "images/piana_pozadi.png",
  "images/fitnes_pozadi.png",
  "images/melisa_pozadi.png",
  "images/krystof_pozadi.png",
  "images/anglictina_pozadi.png"
]
///

renderWebs();
renderDots();

function renderWebs() {
  //web na začátek
  const nWebStart = slides.querySelector('.webDef').cloneNode(true);
  nWebStart.classList = "web edgeWeb";
  nWebStart.querySelector(".img-back").style = "background-image: url("+webColors[webs.length-1]+");";//webs[webs.length-1];
  nWebStart.querySelector(".img-front").src = webs[webs.length-1];
  slides.appendChild(nWebStart, slides.children[1]);
  ///
  for(let i = 0; i < webs.length; i++) {
    const nWeb = slides.querySelector('.webDef').cloneNode(true);
    nWeb.classList = "web";
    nWeb.querySelector(".img-back").style = "background-image: url("+webColors[i]+");";//webs[i];
    nWeb.querySelector(".img-front").src = webs[i];
    slides.appendChild(nWeb, slides.children[slides.children.length]);
  }
  ///web na konec
  const nWebEnd = slides.querySelector('.webDef').cloneNode(true);
  nWebEnd.classList = "web edgeWeb";
  nWebEnd.querySelector(".img-back").style = "background-image: url("+webColors[0]+");";//webs[0];
  nWebEnd.querySelector(".img-front").src = webs[0];
  nWebEnd.querySelector("img").src = webs[0];
  slides.appendChild(nWebEnd, slides.children[slides.children.length]);
}

function renderDots() {
  const dot = document.createElement('span');
  dot.className = 'dot dot-fake';
  dot.setAttribute('data-index', `${0}`);
  dots.appendChild(dot);
  ///
  for (let i = 0; i < webs.length; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.setAttribute('data-index', `${i+1}`);
    dots.appendChild(dot);
  }
}