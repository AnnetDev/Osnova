// export const toggleMenu = () => {
//   document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.header__toggle');
//     const menu = document.querySelector('.header__navigation');
//     const toggleIcon = document.querySelector('.header__toggle-icon');
//     const menuLinks = document.querySelectorAll('.header__navigation-link');

//     menuToggle.addEventListener('click', () => {
//       menu.classList.toggle('header__navigation--opened');
//       menuToggle.classList.toggle('header__toggle--opened');
//       toggleIcon.classList.toggle('header__toggle-icon--opened');
//     });

//     menuLinks.forEach((link) => {
//       link.addEventListener('click', () => {
//         menu.classList.remove('header__navigation--opened');
//         menuToggle.classList.remove('header__toggle--opened');
//         toggleIcon.classList.remove('header__toggle-icon--opened');
//       });
//     });
//   });
// };

export const toggleMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__navigation');
    const toggleIcon = document.querySelector('.header__toggle-icon');
    const menuLinks = document.querySelectorAll('.header__navigation-link');
    const header = document.querySelector('.header');

    // Открытие меню по клику на иконку
    menuToggle.addEventListener('click', (event) => {
      event.stopPropagation(); // Останавливаем всплытие, чтобы не закрыть меню, если клик был по иконке
      menu.classList.toggle('header__navigation--opened');
      menuToggle.classList.toggle('header__toggle--opened');
      toggleIcon.classList.toggle('header__toggle-icon--opened');
    });

    // Закрытие меню при клике на ссылку в меню
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('header__navigation--opened');
        menuToggle.classList.remove('header__toggle--opened');
        toggleIcon.classList.remove('header__toggle-icon--opened');
      });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', (event) => {
      if (!header.contains(event.target)) {
        menu.classList.remove('header__navigation--opened');
        menuToggle.classList.remove('header__toggle--opened');
        toggleIcon.classList.remove('header__toggle-icon--opened');
      }
    });
  });
};
