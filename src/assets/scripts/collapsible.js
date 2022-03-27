function toClickedPosition(element) {
  $('html, body').animate({
    scrollTop: $(element).offset().top - $('.header').innerHeight(),
  }, 300);
}

export default function collapsible() {
  $('.collapsible-item').each(function getEachCollapsible() {
    $(this).on('shown.bs.collapse', function onOpened() {
      toClickedPosition(this);
    });
  });
}
