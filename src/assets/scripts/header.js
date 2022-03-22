/* src/assets/scripts/scroll.js */

function giveStandardHeader() {
  const isHomepage = $('.home-page');
  if (isHomepage) {
    const headerElement = $('.header');
    if ($(window).scrollTop() >= 160) {
      headerElement.addClass('standard');
    } else {
      headerElement.removeClass('standard');
    }
  }
}

function markParentMenu() {
  $('.nav-item').each(function getEachNavItem() {
    const doesHaveChildMenu = !!$(this).find('.child-wrapper').length;
    if (doesHaveChildMenu) {
      $(this).addClass('has-child');
    }
  });
}

export default function header() {
  giveStandardHeader();
  markParentMenu();

  // https://stackoverflow.com/a/22616213
  $(window).on('scroll', () => {
    giveStandardHeader();
  });
}
