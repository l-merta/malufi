document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const kontakt_mini = document.querySelector('.kontakt-mini');
  const kontakt = document.querySelector('.kontakt');
  //let firstWhite = calculateFirstWhite(main);
  let colorChange = [
    {
      height: calculateColorChange(kontakt_mini.offsetTop), //main.scrollHeight - (window.innerHeight * 0.15)
      class: ["header-light", "header-dark"]
    },
    {
      height: calculateColorChange(kontakt.offsetTop),
      class: ["header-dark", "header-light"]
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
    return mainElement - (3 * 16);
  }

  function handleScroll(headerElement, colorChange) { //threshold
    /*
    if (window.scrollY > threshold) {
      headerElement.classList = "header-light";
    } else {
      headerElement.classList = "header-dark";
    }
    */
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
  }
});