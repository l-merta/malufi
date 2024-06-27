const udalosti = [
  {
    date: '2010',
    popis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio assumenda! Corporis, minus hic."
  },
  {
    date: '2011',
    popis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio assumenda! Corporis, minus hic."
  },
  {
    date: '2016',
    popis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio assumenda! Corporis, minus hic."
  },
  {
    date: '2018',
    popis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio assumenda! Corporis, minus hic."
  },
  {
    date: '2022',
    popis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio assumenda! Corporis, minus hic."
  }
];
//
const pointsCont = document.querySelector(".omne .timeline .points");
const udalostiCont = document.querySelector(".omne .timeline .udalosti");
let points = [];

renderUdalosti();
function renderUdalosti() {
  for(let i = 0; i < udalosti.length; i++) {
    const udalost = udalostiCont.querySelector(".udalost-def").cloneNode(true);
    udalost.classList.remove("udalost-def");
    udalost.classList.remove("disabled");
    if(i == udalosti.length-1) udalost.classList.add("udalost-last");

    udalost.querySelector("h1").innerHTML = udalosti[i].date;
    udalost.querySelector("p").innerHTML = udalosti[i].popis;
    udalost.querySelector("img").src = "https://unsplash.it/200"+i+"/180"+i;

    udalostiCont.insertBefore(udalost, udalostiCont.children[udalostiCont.children.length]);
    ///
    if(i % 2 == 0) {
      const point = document.createElement("div");
      point.classList = "point";
      
      point.addEventListener('click', ()=>{
        posun(i/2);
      });
  
      points.push(point);
      pointsCont.insertBefore(point, pointsCont.children[pointsCont.children.length]);
    }
  }
  posun(0);
}
function posun(index) {
  let relative_left = udalostiCont.children[0].style.left;
  relative_left = relative_left.substring(0, relative_left.length - 2);
  relative_left = parseInt(relative_left);
  if(index == -2) {
    //doleva
    for(let i = 0; i < udalostiCont.children.length; i++) {
      udalostiCont.children[i].style = "left: " + (relative_left+100) + "vw;";
    }
    relative_left += 100;
  }
  if(index == -1) {
    //doprava
    for(let i = 0; i < udalostiCont.children.length; i++) {
      udalostiCont.children[i].style = "left: " + (relative_left-100) + "vw;";
    }
    relative_left -= 100;
  }
  //
  if(index < 0) {
    const arrow_buttons = document.querySelectorAll(".omne .timeline .arrows button");
    if(relative_left == 0) {
      arrow_buttons[0].style = "pointer-events: none; opacity: 0";
    }
    else {
      arrow_buttons[0].style = "pointer-events: all; opacity: 1";
    }
    if(relative_left * -1 / 100 == udalosti.length - 1) {
      arrow_buttons[1].style = "pointer-events: none; opacity: 0";
    }
    else {
      arrow_buttons[1].style = "pointer-events: all; opacity: 1";
    }
    return;
  }
  //
  for(let i = 0; i < udalostiCont.children.length; i++) {
    udalostiCont.children[i].style = "left: -" + (100*index) + "vw;";
  }
  points.forEach(p => {
    p.classList.remove("point-active");
  });
  points[index].classList.add("point-active");
}