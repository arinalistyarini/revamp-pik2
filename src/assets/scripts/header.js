/* src/assets/scripts/scroll.js */

function giveStandardHeader() {
  const isHomepage = $('.home-page');
  if (isHomepage) {
    const header = $('.header');
    if ($(window).scrollTop() >= 160) {
      header.addClass('standard');
    } else {
      header.removeClass('standard');
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

giveStandardHeader();
markParentMenu();

// https://stackoverflow.com/a/22616213
$(window).on('scroll', () => {
  giveStandardHeader();
});
