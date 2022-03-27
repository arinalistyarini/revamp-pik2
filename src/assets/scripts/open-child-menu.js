import MAX_WIDTH_MOBILE_BREAKPOINT from './const';

export default function openChildMenu() {
  $('.nav-item.has-child').each(function eachParentMenu() {
    $(this).on('click', function parentMenuOnClick() {
      if ($(window).width() <= MAX_WIDTH_MOBILE_BREAKPOINT) {
        if ($(this).hasClass('opened')) {
          $(this).removeClass('opened');
        } else {
          $(this).addClass('opened');
        }
      }
    });
  });
}
