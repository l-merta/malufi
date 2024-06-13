document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  let firstWhite = calculateFirstWhite(main);

  window.addEventListener('scroll', () => {
    handleScroll(header, firstWhite);
  });

  window.addEventListener('resize', () => {
    firstWhite = calculateFirstWhite(main);
  });

  function calculateFirstWhite(mainElement) {
    return mainElement.scrollHeight - (window.innerHeight * 0.15) - (3 * 16);
  }

  function handleScroll(headerElement, threshold) {
    if (window.scrollY > threshold) {
      headerElement.classList = "header-light";
    } else {
      headerElement.classList = "header-dark";
    }
  }
});