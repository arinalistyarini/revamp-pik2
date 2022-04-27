/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import L from 'leaflet';
import 'leaflet-responsive-popup';

const initiatedMaps = [];
const INTERACTIVE_MAP = '.interactive-map';
const INTERACTIVE_MAP_NOTES = '.interactive-map-notes';
const INTERACTIVE_MAP_SEARCHES = '.interactive-map-search';
const INTERACTIVE_MAP_LOADER = '.interactive-map-loader';
const WIDTH_BREAKPOINT = 991;

export function getExistingMap(id) {
  return initiatedMaps.find((map) => id === map._container.id);
}

export function clearMapMarkers(id) {
  if (initiatedMaps.length) {
    const existingMap = getExistingMap(id);

    // https://stackoverflow.com/a/62545611
    existingMap.eachLayer((layer) => {
      if (layer._popup) {
        layer.remove();
      }
    });
  }
}

export function mapToggleLoader(id, isLoading) {
  if (initiatedMaps.length) {
    const selectedMap = getExistingMap(id);
    const mapDOM = $(`#${id}`);
    const loader = mapDOM.find(INTERACTIVE_MAP_LOADER);
    const search = mapDOM.find(`${INTERACTIVE_MAP_SEARCHES}`).length
      ? mapDOM.find(`${INTERACTIVE_MAP_SEARCHES}`)
      : mapDOM.prev(INTERACTIVE_MAP_SEARCHES);
    const searchInput = search.find('input');
    if (loader.length) {
      if (isLoading) {
        loader.addClass('shown');
        selectedMap._handlers.forEach((handler) => {
          handler.disable();
        });
        searchInput.attr('disabled', true);
      } else {
        loader.removeClass('shown');
        selectedMap._handlers.forEach((handler) => {
          handler.enable();
        });
        searchInput.removeAttr('disabled');
      }
    }
  }
}

async function getImageElement(src) {
  // https://stackoverflow.com/a/60971078
  // https://stackoverflow.com/a/64747517
  const imageElement = new Image();
  imageElement.src = src;
  await imageElement.decode();
  return {
    width: imageElement.width,
    height: imageElement.height,
  };
}

// calculate the edges of the image, in coordinate space
async function getBounds(map) {
  const src = $(`#${map._container.id}`).attr('img-src');
  const imageElement = await getImageElement(src);
  const maxBoundHeight = map.unproject([0, imageElement.height], map.getMaxZoom() - 1);
  const maxBoundWidth = map.unproject([imageElement.width, 0], map.getMaxZoom() - 1);
  return new L.LatLngBounds(maxBoundHeight, maxBoundWidth);
}

export async function centeringMap(map) {
  const bounds = await getBounds(map);
  const mapId = map._container.id;

  const maxY = bounds._southWest.lat;
  const maxX = bounds._northEast.lng;
  const mapContainerHeight = $(`#${mapId}`).innerHeight();
  const mapContainerWidth = $(`#${mapId}`).innerWidth();
  const mapContainerHeightUnproject = map.unproject(
    [0, mapContainerHeight],
    map.getMaxZoom() - 1,
  ).lat;
  const mapContainerWidthUnproject = map.unproject(
    [mapContainerWidth, 0],
    map.getMaxZoom() - 1,
  ).lng;
  const centerY = (maxY / 2) - (mapContainerHeightUnproject / 2);
  const centerX = (maxX / 2) - (mapContainerWidthUnproject / 2);
  const minZoomRecalculate = (mapContainerWidthUnproject / maxX) * 4.4;
  map.options.minZoom = minZoomRecalculate;
  map.setView(new L.LatLng(centerY, centerX), minZoomRecalculate);
}

// re-position search & notes
export function interactiveMapAddOnsPositionAndClearSearch(id) {
  const notes = id ? $(`#${id}`).find(INTERACTIVE_MAP_NOTES) : $(INTERACTIVE_MAP_NOTES);
  if (notes) {
    notes.each(function eachNote() {
      const note = $(this);
      const noteMapWrapper = note.parents(INTERACTIVE_MAP).length
        ? note.parents(INTERACTIVE_MAP)
        : notes.prev(INTERACTIVE_MAP);

      // smaller viewport
      if ($(window).width() <= WIDTH_BREAKPOINT) {
        if (note.length && noteMapWrapper) {
          noteMapWrapper.after(note);
        }
      } else if (note.length && noteMapWrapper) {
        note.appendTo(noteMapWrapper);
      }
    });
  }

  const searches = id ? $(`#${id}`).find(INTERACTIVE_MAP_SEARCHES) : $(INTERACTIVE_MAP_SEARCHES);
  if (searches) {
    searches.each(function eachSearch() {
      const search = $(this);
      const searchMapWrapper = search.parents(INTERACTIVE_MAP).length
        ? search.parents(INTERACTIVE_MAP)
        : search.next(INTERACTIVE_MAP);

      // smaller viewport
      if ($(window).width() <= WIDTH_BREAKPOINT) {
        if (search.length && searchMapWrapper) {
          searchMapWrapper.before(search);
        }
      } else if (search.length && searchMapWrapper) {
        search.prependTo(searchMapWrapper);
      }

      // -- search
      const searchInput = search.find('input');
      const searchEraser = search.find('.map-clear-search');
      if (searchInput.length) {
        searchInput.on('input', function searchOnInput() {
          if (this.value) {
            searchEraser.addClass('shown');
          } else {
            searchEraser.removeClass('shown');
          }
        });
      }
      searchEraser.on('click', () => {
        if (searchInput.val()) {
          searchInput.val('');
          searchEraser.removeClass('shown');
          clearMapMarkers(id);
          centeringMap(getExistingMap(id));
        }
      });
    });
  }
}

export function initInteractiveMap(id) {
  interactiveMapAddOnsPositionAndClearSearch(id);

  const interactiveMap = id ? $(`#${id}${INTERACTIVE_MAP}`) : $(INTERACTIVE_MAP_NOTES);
  if (interactiveMap) {
    interactiveMap.each(async function eachInteractiveMap() {
      // https://codepen.io/joelf/pen/bjdMww
      // Using leaflet.js to pan and zoom a big image.
      // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

      const mapId = $(this).attr('id');
      const mapImage = $(this).attr('img-src');
      const backgroundColor = $(this).attr('background-color');

      // give background color if any
      if (backgroundColor) $(this).css('background-color', backgroundColor);

      if (L.DomUtil.get(mapImage)) {
        L.DomUtil.get(mapImage).remove();
      }

      // dimensions of the image map
      const minZoom = 1.4;
      const maxZoom = parseFloat($(this).attr('max-zoom') || 4);
      const zoom = minZoom;

      const map = L.map(mapId, {
        minZoom,
        maxZoom,
        zoom,
        center: [0, 0],
        crs: L.CRS.Simple,
        zoomControl: false,
      });
      initiatedMaps.push(map);

      // zoom control
      L.control.zoom({
        position: 'topright',
      }).addTo(map);

      // add the image overlay,
      // so that it covers the entire map
      const bounds = await getBounds(map);
      L.imageOverlay(mapImage, bounds).addTo(map);

      // tell leaflet that the map is exactly as big as the image
      map.setMaxBounds(bounds);

      // centering map
      centeringMap(map);
    });
  }
}

export function markMap({
  id, title, position, content, icon, color,
}) {
  if (initiatedMaps.length) {
    const existingMap = getExistingMap(id);
    const iconMarker = {
      icon: L.divIcon({
        className: `icon-marker ${color}`,
        html: `<i class='icon-pik ${icon}'><i>`,
      }),
    };

    const popupTitle = `<div class='popup-title'>${title}</div>`;
    const popupContent = content ? `<div class='popup-content-detail'>${content}</div>` : '';
    const iconPopup = L.responsivePopup({
      hasTip: false,
      autoPan: true,
      className: `marker-popup ${color}`,
      minWidth: 160,
      ...$(window).width() <= WIDTH_BREAKPOINT && { maxWidth: 280 },
      closeButton: false,
    }).setContent(`${popupTitle}${popupContent}`);

    L.marker(
      position,
      icon ? iconMarker : null,
    ).addTo(existingMap)
      .bindPopup(iconPopup);
  }
}
