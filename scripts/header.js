document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const uvod = document.querySelector('main');
  const umime = document.querySelector('.umime');
  //const kontakt_mini = document.querySelector('.kontakt-mini');
  const kontakt = document.querySelector('.kontakt');
  //let firstWhite = calculateFirstWhite(main);
  let colorChange = [
    {
      top: calculateColorChange(uvod.offsetTop), //main.scrollHeight - (window.innerHeight * 0.15)
      height: calculateColorChange(uvod.offsetTop) + uvod.offsetHeight
      //class: ["header-light", "header-dark"]
    },
    {
      top: calculateColorChange(umime.offsetTop),
      height: calculateColorChange(umime.offsetTop) + umime.offsetHeight
    },
    {
      top: calculateColorChange(kontakt.offsetTop),
      height: calculateColorChange(kontakt.offsetTop) + kontakt.offsetHeight
    }
  ];

  window.addEventListener('scroll', () => {
    //handleScroll(header, firstWhite);
    handleScroll(header, colorChange);
  });

  window.addEventListener('resize', () => {
    //firstWhite = calculateFirstWhite(main);
  });

  function calculateColorChange(mainElement) {
    //return mainElement.scrollHeight - (window.innerHeight * 0.15) - (3 * 16);
    //element.height - usek úsek ze spod - polovina header
    return mainElement - (3 * 16) - 100; //-100 protože nevim
  }

  function handleScroll(headerElement, colorChange) { //threshold
    /*
    if (window.scrollY > threshold) {
      headerElement.classList = "header-light";
    } else {
      headerElement.classList = "header-dark";
    }
    */
    /*
    if (window.scrollY > colorChange[0].height) {
      headerElement.classList = colorChange[0].class[0];
      if (window.scrollY > colorChange[1].height) {
        headerElement.classList = colorChange[1].class[0];
      } else {
        headerElement.classList = colorChange[1].class[1];
      }
    } else {
      headerElement.classList = colorChange[0].class[1];
    }
    */
   console.log(colorChange[0].top);
    if(window.scrollY >= colorChange[0].top && window.scrollY <= colorChange[0].height ||
       window.scrollY >= colorChange[1].top && window.scrollY <= colorChange[1].height ||
       window.scrollY >= colorChange[2].top && window.scrollY <= colorChange[2].height) {
      headerElement.classList = "header-dark";
    }
    else {
      headerElement.classList = "header-light";
    }
  }
});