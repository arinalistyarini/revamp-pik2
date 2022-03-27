export default function thumbnailSlider() {
  const thumbnailSliderElement = $('.thumbnail-slider');
  const isThumbnailSliderElementAvailable = !!thumbnailSliderElement.length;
  if (isThumbnailSliderElementAvailable) {
    thumbnailSliderElement.each(function getEachthumbnail() {
      const totalShown = parseInt($(this).attr('total-shown'), 10);

      // unslick first
      if ($(this).hasClass('slick-initialized')) {
        $(this).slick('unslick');
      }

      // slick again
      $(this).slick({
        autoplay: process.env.NODE_ENV !== 'development',
        infinite: true,
        speed: 500,
        prevArrow: '<a class="arrow-slider arrow-slide-left"><i class="icon-pik ip-arrow-left"></i></a>',
        nextArrow: '<a class="arrow-slider arrow-slide-right"><i class="icon-pik ip-arrow-right"></i></a>',
        ...!!totalShown && { slidesToShow: totalShown },
        ...!totalShown && { slidesToScroll: 1 },
        ...totalShown > 1 && {
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      });
    });
  }
}
