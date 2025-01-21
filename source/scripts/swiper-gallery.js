import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';


export function initializeGallerySwiper() {
  const reviewsSwiper = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    loop: false,
    // grabCursor: true,
    normalizeSliderIndex: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery__button.swiper-button-next',
      prevEl: '.gallery__button.swiper-button-prev',
    },
    slidesPerGroup: 1,
    slidesPerView: 'auto',
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //     spaceBetween: 15,
    //     centeredSlides: true,
    //   },
    //   768: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     // slidesOffsetAfter: 30,
    //   },
    //   1440: {
    //     slidesPerView: 2,
    //     // spaceBetween: 120,
    //   },
    // },
  });

  const prevButton = document.querySelector('.gallery__button.swiper-button-prev');
  const nextButton = document.querySelector('.gallery__button.swiper-button-next');

  if (prevButton && nextButton) {
    prevButton.setAttribute('tabindex', '0');
    nextButton.setAttribute('tabindex', '0');

    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        reviewsSwiper.slidePrev();
      }
    });

    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        reviewsSwiper.slideNext();
      }
    });
  }
}
