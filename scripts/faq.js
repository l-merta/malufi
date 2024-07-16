

function openQestion(m) {
  const q = m.parentElement;
  if(q.classList.contains("otazka-open")) {
    q.classList.remove("otazka-open");
  }
  else {
    q.classList.add("otazka-open");
  }

  setTimeout(()=>{
    window.colorChange[2].top = window.calculateColorChange(kontakt.offsetTop);
  }, 200);
}