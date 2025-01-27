// import Swiper from 'swiper/bundle';
// import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';

import { initializeGallerySwiper } from './swiper-gallery';
import { toggleMenu } from './burger-menu';

initializeGallerySwiper();
toggleMenu();
