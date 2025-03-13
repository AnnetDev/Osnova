import 'swiper/css/bundle';
import 'swiper/css/navigation';

import { initializeGallerySwiper } from './swiper-gallery';
import { toggleMenu } from './burger-menu';
import {openPreferredMessenger} from './messenger';

initializeGallerySwiper();
toggleMenu();

document.addEventListener('DOMContentLoaded', () => {
  const buyCertificate = document.querySelector('.services__certificate');

  buyCertificate.addEventListener('click', (event) => {
    openPreferredMessenger(event);
  });
});

