import { giveStandardHeader, reviveBody } from './header';
import bannerSlider from './banner-slider';
import thumbnailSlider from './thumbnail-slider';
import fullWidth from './full-width';
import imageCover from './image-cover';

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

export default function onResize() {
  $(window).on('resize', () => {
    eventOnFinish(() => {
      giveStandardHeader();
      bannerSlider();
      thumbnailSlider();
      fullWidth();
      imageCover();
      reviveBody();
    }, 200, 'windowOnResize');
  });
}
