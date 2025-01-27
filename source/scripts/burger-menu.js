export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__navigation');
    const toggleIcon = document.querySelector('.header__toggle-icon');
    const menuLinks = document.querySelectorAll('.header__navigation-link');

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('header__navigation--opened');
      menuToggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('header__toggle-icon--opened');
    });

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('header__navigation--opened');
        menuToggle.classList.remove('header__toggle--opened');
        toggleIcon.classList.remove('header__toggle-icon--opened');
      });
    });
  });
};
