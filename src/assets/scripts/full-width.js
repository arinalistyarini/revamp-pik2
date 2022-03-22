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

export default function fullWidth() {
  const gutterOneSide = `calc((calc(100vw - ${getScrollbarWidth()}px) - 100%) / 2)`;
  const marginToShift = `calc(${gutterOneSide} * -1)`;

  // stretch to left & right
  const noGutterElement = $('.stretch-no-gutter');
  const isNoGutterElementAvailable = !!noGutterElement.length;

  if (isNoGutterElementAvailable) {
    noGutterElement.each(function eachNoGutter() {
      $(this).css({
        width: `calc(100vw - ${getScrollbarWidth()}px)`,
        'margin-left': marginToShift,
      });
    });
  }

  // stretch to left / right only
  const noGutterLeftElement = $('.stretch-to-left');
  const noGutterRightElement = $('.stretch-to-right');
  const isNoGutterLeftOrRightAvailable = !!noGutterLeftElement.length
    || !!noGutterRightElement.length;
  if (isNoGutterLeftOrRightAvailable) {
    noGutterLeftElement.each(function eachNoGutter() {
      $(this).css({
        width: `calc(100vw - ${gutterOneSide})`,
        'margin-left': marginToShift,
      });
    });

    noGutterRightElement.each(function eachNoGutter() {
      $(this).css({
        width: `calc(100vw - ${gutterOneSide} - ${getScrollbarWidth()}px)`,
      });

      // adjust width of child
      const leftColumn = $(this).find('.two-columns >:first-child');
      if (leftColumn.length > 0) {
        $(leftColumn).css({
          width: `calc(50% - ${gutterOneSide})`,
        });
      }
      const rightColumn = $(leftColumn).next();
      if (rightColumn.length > 0) {
        $(rightColumn).css({
          width: `calc(50% + ${gutterOneSide})`,
        });
      }
    });
  }
}
