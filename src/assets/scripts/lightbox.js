const lightboxItem = $('.lightbox-item');
const isLightboxItemAvailable = !!lightboxItem.length;
if (isLightboxItemAvailable) {
  lightboxItem.each(function getEachLightbox() {
    let type = null;
    ['lightbox-iframe', 'lightbox-image', 'lightbox-inline'].forEach((lightboxClass) => {
      if ($(this).hasClass(lightboxClass)) {
        [, type] = lightboxClass.split('-');
      }
    });
    if (type) {
      $(this).magnificPopup({
        type,
      });
    }
  });
}
