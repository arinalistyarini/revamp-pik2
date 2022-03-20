/* src/assets/scripts/carousel.js */

const bannerSlider = $('.banner-slider');
const isBannerSliderAvailable = !!bannerSlider.length;
if (isBannerSliderAvailable) {
  bannerSlider.each(function getEachBanner() {
    $(this).slick({
      autoplay: true,
      infinite: true,
      speed: 500,
      prevArrow: '<a class="arrow-slider arrow-slide-left"><i class="icon-pik ip-arrow-left"></i></a>',
      nextArrow: '<a class="arrow-slider arrow-slide-right"><i class="icon-pik ip-arrow-right"></i></a>',
    });
  });
}
