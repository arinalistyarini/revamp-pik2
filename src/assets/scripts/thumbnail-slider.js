/* src/assets/scripts/carousel.js */

const thumbnailSlider = $('.thumbnail-slider');
const isThumbnailSliderAvailable = !!thumbnailSlider.length;
if (isThumbnailSliderAvailable) {
  thumbnailSlider.each(function getEachthumbnail() {
    const totalShown = parseInt($(this).attr('total-shown'), 10);
    $(this).slick({
      autoplay: true,
      infinite: true,
      speed: 250,
      prevArrow: '<a class="arrow-slider arrow-slide-left"><i class="icon-pik ip-arrow-left"></i></a>',
      nextArrow: '<a class="arrow-slider arrow-slide-right"><i class="icon-pik ip-arrow-right"></i></a>',
      ...!!totalShown && { slidesToShow: totalShown },
      ...!!totalShown && { slidesToScroll: 1 },
    });
  });
}
