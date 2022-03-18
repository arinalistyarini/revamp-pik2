/* src/app.js */

// Styles
import 'styles/_app.scss';

// Libraries
import 'bootstrap';
import 'slick-carousel';

// Scripts
$(() => {
  require('scripts/header');
  require('scripts/homepage-slider');
  require('scripts/homepage-map');
});
