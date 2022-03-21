// https://davidwalsh.name/detect-scrollbar-width
function getScrollbarWidth() {
  // Create the measurement node
  const scrollDiv = document.createElement('div');
  scrollDiv.className = 'scrollbar-measure';
  document.body.appendChild(scrollDiv);

  // Get the scrollbar width
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  // Delete the DIV
  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
}


const noGutterElement = $('.stretch-no-gutter');
const isNoGutterElementAvailable = !!noGutterElement.length;
if (isNoGutterElementAvailable) {
  noGutterElement.each(function eachNoGutter() {
    const fullViewportWidth = $(window).width() - getScrollbarWidth();
    console.log(`calc(${fullViewportWidth}px - 100%) * -1 / 2)`);
    $(this).css({
      width: `calc(100vw - ${getScrollbarWidth()}px)`,
      'margin-left': `calc((calc(100vw - ${getScrollbarWidth()}px) - 100%) * -1 / 2)`,
    });
  });
}
