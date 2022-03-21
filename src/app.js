/* src/app.js */

// Styles
import 'styles/_app.scss';

// Libraries
import 'bootstrap';
import 'slick-carousel';
import 'magnific-popup';

// Scripts
$(() => {
  require('scripts/header');
  require('scripts/homepage-slider');
  require('scripts/homepage-map');
  require('scripts/lightbox');
  require('scripts/thumbnail-slider');
  require('scripts/full-width');
  require('scripts/image-cover');
});
