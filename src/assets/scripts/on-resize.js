import { giveStandardHeader, reviveBody } from './header';
import bannerSlider from './banner-slider';
import thumbnailSlider from './thumbnail-slider';
import fullWidth from './full-width';
import imageCover from './image-cover';
import { interactiveMapAddOnsPositionAndClearSearch, mapShowRequest } from './interactive-map';

// https://stackoverflow.com/a/4541963
const eventOnFinish = (function finishEvent() {
  const timers = {};
  return function finish(callback, ms, uniqueId) {
    if (!uniqueId) {
      return;
    }

    if (timers[uniqueId]) {
      clearTimeout(timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
}());

let previousWindowWidth = $(window).width();

export default function onResize() {
  $(window).on('resize', function resizingWindow() {
    const currentWindowWidth = $(this).width();
    if (previousWindowWidth !== currentWindowWidth) {
      eventOnFinish(() => {
        giveStandardHeader();
        bannerSlider();
        thumbnailSlider();
        fullWidth();
        imageCover();
        reviveBody();
        interactiveMapAddOnsPositionAndClearSearch();
        mapShowRequest('<a onClick="window.location.reload();">Please refresh page</a>');
      }, 200, 'windowOnResize');

      previousWindowWidth = $(this).width();
    }
  });
}
