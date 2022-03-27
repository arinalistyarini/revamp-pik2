export default function imageCover() {
  $('.banner-image, .img-wrapper, .thumbnail-list .thumbnail-item').each(function getWrapper() {
    const wrapper = $(this);
    let container = $(this);

    if (container.hasClass('banner-image')) {
      // change container to pik-banner
      container = $(this).parents('.pik-banner');
    }

    if (container.find('.thumbnail-wrapper').length > 0) {
      container = container.find('.thumbnail-wrapper');
    }

    let containerRatio = container.innerWidth() / container.innerHeight();
    const isThumbnail = container.hasClass('thumbnail-item') || container.hasClass('thumbnail-wrapper');
    if (isThumbnail) {
      containerRatio = container.width() / container.height();
    }
    if (container.is('[class*=ratio-]')
      || container.is('[class^=ratio-]')
      || container.hasClass('full-height')
      || isThumbnail
    ) {
      wrapper.find('img').each(function getImage() {
        const image = $(this);

        // image finish loading
        // https://stackoverflow.com/a/60971078
        const imgElement = new Image();
        imgElement.src = image.attr('src');

        imgElement.decode().then(() => {
          const imageRatio = imgElement.width / imgElement.height;
          const isFillHeight = imageRatio > containerRatio;
          wrapper.removeClass('fill-height');
          wrapper.removeClass('fill-width');

          if (!isThumbnail) {
            wrapper.addClass(isFillHeight ? 'fill-height' : 'fill-width');
          } else {
            // swapped, because in thumbnail we don't need image cover
            wrapper.addClass(!isFillHeight ? 'fill-height' : 'fill-width');
          }
        });
      });
    }
  });
}
