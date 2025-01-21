document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.main-header__toggle');
  const menu = document.querySelector('.main-navigation');

  menuToggle.classList.remove('main-header__toggle--nojs');
  menu.classList.remove('main-navigation--nojs');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('main-navigation--open');
    menu.classList.toggle('main-navigation--closed');
    menuToggle.classList.toggle('main-header__toggle--opened');
  });
});
