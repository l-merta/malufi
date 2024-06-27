const headerB = document.querySelectorAll("header .lang img");
const navMobileB = document.querySelectorAll(".navMobile .lang img");

const texts = [
  { //header
    class: "header nav .link1 span",
    cz: "Kurzy",
    de: "Kurse"
  },
  {
    class: "header nav .link2",
    cz: "O mně",
    de: "Über mich"
  },
  {
    class: "header nav .link3",
    cz: "Recenze",
    de: "Rezension"
  },
  {
    class: "header nav .link4",
    cz: "Kontakt",
    de: "Kontakt"
  },
  { //kurzyNav
    class: ".kurzyNav .linkCont1 a",
    cz: "Individuální kurz",
    de: "Individueller Kurs"
  },
  {
    class: ".kurzyNav .linkCont2 a",
    cz: "Skupinový kurz",
    de: "Gruppenkurs"
  },
  {
    class: ".kurzyNav .linkCont3 a",
    cz: "Firemní kurz",
    de: "Firmenkurs"
  },
  { //uvod
    class: ".uvod .cont a span",
    cz: "Kurzy",
    de: "Kurse"
  },
]

function switchTexts(lang) {
  headerB[0].classList.remove("img-active");
  headerB[1].classList.remove("img-active");
  navMobileB[0].classList.remove("img-active");
  navMobileB[1].classList.remove("img-active");

  texts.forEach(obj => {
    if(lang == "cz") {
      document.querySelector(obj.class).innerHTML = obj.cz;
      headerB[0].classList.add("img-active");
      navMobileB[0].classList.add("img-active");
    }
    else if(lang == "de") {
      document.querySelector(obj.class).innerHTML = obj.de;
      headerB[1].classList.add("img-active");
      navMobileB[1].classList.add("img-active");
    }
  });
}