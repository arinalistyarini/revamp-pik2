/* src/assets/scripts/scroll.js */
import MAX_WIDTH_MOBILE_BREAKPOINT from './const';

export function giveStandardHeader() {
  const isHomepage = $('.home-page');
  if (isHomepage && $(window).width() > MAX_WIDTH_MOBILE_BREAKPOINT) {
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

export function killBody() {
  $('body').css({
    overflow: 'hidden',
    height: '100vh',
  });

  $('.map-content').each(function getMap() {
    $(this).css({
      display: 'none',
    });
  });
}

export function reviveBody() {
  $('body').css({
    overflow: 'auto',
    height: 'auto',
  });

  $('.map-content').each(function getMap() {
    $(this).css({
      display: 'block',
    });
  });
}

export default function header() {
  giveStandardHeader();
  markParentMenu();

  // https://stackoverflow.com/a/22616213
  $(window).on('scroll', () => {
    giveStandardHeader();
  });

  // disable scroll on mobile
  // https://stackoverflow.com/q/37995824
  // https://stackoverflow.com/a/29842974
  $('.navbar-collapse').on('shown.bs.collapse', () => {
    killBody();
  });

  $('.navbar-collapse').on('hidden.bs.collapse', () => {
    reviveBody();
  });

  $(document).on('click', (event) => {
    setTimeout(() => {
      const clickedElement = $(event.target);
      const isHeaderClicked = clickedElement.parents('.header').length > 0 || clickedElement.is('.header');
      const isNavbarTogglerClicked = clickedElement.parents('.navbar-toggler').length > 0 || clickedElement.is('.navbar-toggler');
      const isMenuClicked = clickedElement.parents('.navbar-nav .nav-item').length > 0 || clickedElement.is('.navbar-nav .nav-item');
      const isMenuOpened = $('.header .navbar-collapse.show').length > 0 || clickedElement.is('.header .navbar-collapse.show');

      if (isHeaderClicked && (!isNavbarTogglerClicked && !isMenuClicked) && isMenuOpened) {
        $('.navbar-collapse').collapse('hide');
      }
    });
  });
}
