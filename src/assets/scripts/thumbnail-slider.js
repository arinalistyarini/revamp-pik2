export default function thumbnailSlider() {
  const thumbnailSliderElement = $('.thumbnail-slider');
  const isThumbnailSliderElementAvailable = !!thumbnailSliderElement.length;
  if (isThumbnailSliderElementAvailable) {
    thumbnailSliderElement.each(function getEachthumbnail() {
      const totalShown = parseInt($(this).attr('total-shown'), 10);
      $(this).slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow: '<a class="arrow-slider arrow-slide-left"><i class="icon-pik ip-arrow-left"></i></a>',
        nextArrow: '<a class="arrow-slider arrow-slide-right"><i class="icon-pik ip-arrow-right"></i></a>',
        ...!!totalShown && { slidesToShow: totalShown },
        ...!!totalShown && { slidesToScroll: 1 },
      });
    });
  }
}
