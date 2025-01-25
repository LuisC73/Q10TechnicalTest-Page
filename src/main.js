import 'boxicons/css/boxicons.min.css';
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  const buttonHamburger = document.querySelector('.hamburger-menu');

  document.addEventListener('click', (e) => {
    if (e.target === buttonHamburger) {
      buttonHamburger.classList.toggle('hamburger-menu--active');
    }
  });
});