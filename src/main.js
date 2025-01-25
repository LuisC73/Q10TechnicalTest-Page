import 'boxicons/css/boxicons.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const buttonHamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.header__nav');
  const buttonUp = document.querySelector('.button-up');

  const toggleMenu = () => {
    buttonHamburger.classList.toggle('hamburger-menu--active');
    navbar.classList.toggle('header__nav--active');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  document.addEventListener('click', (e) => {
    if (e.target === buttonHamburger) toggleMenu();
    if (e.target === buttonUp) scrollToTop();
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      buttonUp.classList.add('button-up--active');
    } else {
      buttonUp.classList.remove('button-up--active');
    }
  });
});