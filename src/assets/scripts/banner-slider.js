/* src/assets/scripts/carousel.js */
export default function bannerSlider() {
  const bannerSliderElement = $('.banner-slider');
  const isBannerSliderElementAvailable = !!bannerSliderElement.length;
  if (isBannerSliderElementAvailable) {
    bannerSliderElement.each(function getEachBanner() {
      $(this).slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow: '<a class="arrow-slider arrow-slide-left"><i class="icon-pik ip-arrow-left"></i></a>',
        nextArrow: '<a class="arrow-slider arrow-slide-right"><i class="icon-pik ip-arrow-right"></i></a>',
      });
    });
  }
}
