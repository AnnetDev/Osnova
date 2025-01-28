import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/navigation';


export function initializeGallerySwiper() {
  const gallerySwiper = new Swiper('.gallery__swiper', {
    modules: [Navigation],
    loop: true,
    grabCursor: true,
    normalizeSliderIndex: true,
    direction: 'horizontal',
    navigation: {
      nextEl: '.gallery__button.swiper-button-next',
      prevEl: '.gallery__button.swiper-button-prev',
    },
    slidesPerGroup: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 9,

      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  const prevButton = document.querySelector('.gallery__button.swiper-button-prev');
  const nextButton = document.querySelector('.gallery__button.swiper-button-next');

  if (prevButton && nextButton) {
    prevButton.setAttribute('tabindex', '0');
    nextButton.setAttribute('tabindex', '0');

    prevButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        gallerySwiper.slidePrev();
      }
    });

    nextButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        gallerySwiper.slideNext();
      }
    });
  }
}
