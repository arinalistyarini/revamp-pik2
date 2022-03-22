/* src/app.js */

// Styles
import 'styles/_app.scss';

// Libraries
import 'bootstrap';
import 'slick-carousel';
import 'magnific-popup';

// local
import header from './assets/scripts/header';
import bannerSlider from './assets/scripts/banner-slider';
import map from './assets/scripts/map';
import lightbox from './assets/scripts/lightbox';
import thumbnailSlider from './assets/scripts/thumbnail-slider';
import fullWidth from './assets/scripts/full-width';
import imageCover from './assets/scripts/image-cover';

// Scripts
$(() => {
  header();
  bannerSlider();
  map();
  lightbox();
  thumbnailSlider();
  fullWidth();
  imageCover();
});
