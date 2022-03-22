export default function imageCover() {
  $('.banner-image, .img-wrapper').each(function getWrapper() {
    const wrapper = $(this);
    let container = $(this);

    if (container.hasClass('banner-image')) {
      // change container to pik-banner
      container = $(this).parents('.pik-banner');
    }

    const containerRatio = container.innerWidth() / container.innerHeight();
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
        wrapper.addClass(isFillHeight ? 'fill-height' : 'fill-width');
      });
    });
  });
}
