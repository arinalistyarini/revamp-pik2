import MAX_WIDTH_MOBILE_BREAKPOINT from './const';

export default function openChildMenu() {
  $('.nav-item.has-child').each(function eachParentMenu() {
    if ($(window).width() <= MAX_WIDTH_MOBILE_BREAKPOINT) {
      $(this).on('click', function parentMenuOnClick() {
        if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
        } else {
          $(this).addClass('opened');
        }
      });
    }
  });
}
