import 'boxicons/css/boxicons.min.css';
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  const buttonHamburger = document.querySelector('.hamburger-menu');
  const navbar = document.querySelector('.header__nav');

  function toggleMenu() {
    buttonHamburger.classList.toggle('hamburger-menu--active');
    navbar.classList.toggle('header__nav--active');
  }

  document.addEventListener('click', (e) => {
    if (e.target === buttonHamburger) toggleMenu();
  });
});