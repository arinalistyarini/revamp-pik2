/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */

import L from 'leaflet';
import 'leaflet-responsive-popup';

const initiatedMaps = [];
const INTERACTIVE_MAP = '.interactive-map';
const INTERACTIVE_MAP_NOTES = '.interactive-map-notes';
const INTERACTIVE_MAP_SEARCHES = '.interactive-map-search';
const INTERACTIVE_MAP_LOADER = '.interactive-map-loader';
const INTERACTIVE_MAP_REQUEST = '.interactive-map-request';
const WIDTH_BREAKPOINT = 991;

export function getMapId(map) {
  if ($(map._container).attr('id')) $(map._container).attr('id');
  return map._container.id;
}

export function getExistingMap(id) {
  return initiatedMaps.find((map) => id === getMapId(map));
}

export function clearMapMarkers(id) {
  if (initiatedMaps.length) {
    const existingMap = getExistingMap(id);

    // https://stackoverflow.com/a/62545611
    if (existingMap) {
      existingMap.eachLayer((layer) => {
        if (layer._popup) {
          layer.remove();
        }
      });
    }
  }
}

function toggleMapOperation(map, isEnabled) {
  const mapDOM = $(`#${getMapId(map)}`);
  const search = mapDOM.find(`${INTERACTIVE_MAP_SEARCHES}`).length
    ? mapDOM.find(`${INTERACTIVE_MAP_SEARCHES}`)
    : mapDOM.prev(INTERACTIVE_MAP_SEARCHES);
  const searchInput = search.find('input');
  if (isEnabled) {
    map._handlers.forEach((handler) => {
      handler.enable();
    });
    searchInput.removeAttr('disabled');
  } else {
    map._handlers.forEach((handler) => {
      handler.disable();
    });
    searchInput.attr('disabled', true);
  }
}

export function mapShowRequest(requestText) {
  if ($(INTERACTIVE_MAP)) {
    $(INTERACTIVE_MAP).each(function eachMap() {
      const mapId = $(this).attr('id');
      const map = window.global.getExistingMap(mapId);

      const request = $(this).find(INTERACTIVE_MAP_REQUEST);
      if (request.length) {
        request.addClass('shown');
        toggleMapOperation(map, false);
        request.find('.text-request').html(requestText);
      }
    });
  }
}

export function mapToggleLoader(id, isLoading, isSolid) {
  if (initiatedMaps.length) {
    const mapDOM = $(`#${id}`);
    const loader = mapDOM.find(INTERACTIVE_MAP_LOADER);
    const selectedMap = getExistingMap(id);
    if (loader.length) {
      if (isLoading) {
        loader.addClass('shown');
        toggleMapOperation(selectedMap, false);
      } else {
        loader.removeClass('shown');
        toggleMapOperation(selectedMap, true);
      }
    }

    if (isSolid) {
      loader.addClass('solid');
    } else {
      loader.removeClass('solid');
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

async function getMapImage(map) {
  const mapId = getMapId(map);
  const src = $(`#${mapId}`).attr('img-src');
  const mapImage = await getImageElement(src);
  return mapImage;
}

function getMapContainer(map) {
  const mapId = getMapId(map);
  return $(`#${mapId}`);
}

export async function getFactor(map) {
  const mapImage = await getMapImage(map);
  const mapContainer = getMapContainer(map);
  const ratioMap = mapImage.width / mapImage.height;
  const ratioContainer = mapContainer.innerWidth() / mapContainer.innerHeight();
  const fillWidth = mapContainer.innerWidth() / mapImage.width;
  const fillHeight = mapContainer.innerHeight() / mapImage.height;

  if (ratioMap > ratioContainer) {
    return fillHeight;
  }

  return fillWidth;
}

// calculate the edges of the image, in coordinate space
// http://disq.us/p/1c32atj
async function getBounds(map) {
  const factor = await getFactor(map);
  const mapImage = await getMapImage(map);
  const bounds = [[0, 0], [mapImage.height * factor, mapImage.width * factor]];
  return bounds;
}

export async function centeringMap(map) {
  const bounds = await getBounds(map) || [[], []];
  const centerY = bounds[1][0] / 2;
  const centerX = bounds[1][1] / 2;
  const minZoomRecalculate = await getFactor(map);
  map.options.minZoom = minZoomRecalculate;
  const container = getMapContainer(map);
  const mapImage = await getMapImage(map);
  const maxZoomRecalculate = Math.ceil(
    Math.log(
      container.innerWidth() / mapImage.width > container.innerHeight() / mapImage.height
        ? mapImage.width / container.innerWidth()
        : mapImage.height / container.innerHeight(),
    ) / Math.log(2),
  );
  map.options.maxZoom = maxZoomRecalculate;
  map.setView([centerY, centerX], minZoomRecalculate);
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

      // to fix safari issue: unclickable div
      const searchInput = search.find('input');
      // const searchId = search.attr('id');
      // const searchDomUtil = L.DomUtil.get(searchId);
      // L.DomEvent.on(searchDomUtil, 'click', (event) => {
      //   L.DomEvent.preventDefault(event);
      //   searchInput.trigger('focus');
      // });


      // -- search
      // const searchInput = search.find('input');
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
  const interactiveMap = id ? $(`#${id}${INTERACTIVE_MAP}`) : $(INTERACTIVE_MAP);
  if (interactiveMap) {
    interactiveMap.each(async function eachInteractiveMap() {
      // https://codepen.io/joelf/pen/bjdMww
      // Using leaflet.js to pan and zoom a big image.
      // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
      // but bound use this comment: http://disq.us/p/1c32atj

      const mapId = $(this).attr('id');
      interactiveMapAddOnsPositionAndClearSearch(mapId);

      const mapImgSrc = $(this).attr('img-src');
      const backgroundColor = $(this).attr('background-color');

      // give background color if any
      if (backgroundColor) $(this).css('background-color', backgroundColor);

      if (L.DomUtil.get(mapImgSrc)) {
        L.DomUtil.get(mapImgSrc).remove();
      }

      // dimensions of the image map
      // all of these 3 zoom info will be overriden in centeringMap(...)
      const minZoom = 1;
      const maxZoom = 4;
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

      mapToggleLoader(mapId, true, true);

      // zoom control
      L.control.zoom({
        position: 'topright',
      }).addTo(map);

      // add the image overlay,
      // so that it covers the entire map
      // bounds follow this comment http://disq.us/p/1c32atj
      const bounds = await getBounds(map);
      L.imageOverlay(mapImgSrc, bounds).addTo(map);

      // tell leaflet that the map is exactly as big as the image
      map.setMaxBounds(bounds);

      // centering map
      const waitForCenteringMap = (delay) => new Promise((resolve) => setTimeout(() => {
        centeringMap(map);
        resolve();
      }, delay));
      await waitForCenteringMap(800);
      setTimeout(() => {
        mapToggleLoader(mapId, false);
      }, 400);
    });
  }
}

export async function toggleCoordinateLog(map) {
  const factor = await getFactor(map);
  map.on('click', (ev) => {
    // http://disq.us/p/1c32atj
    console.log({
      lat: ev.latlng.lat / factor,
      lng: ev.latlng.lng / factor,
    });
  });
}

export async function markMap({
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
      // autoPan: true,
      className: `marker-popup ${color}`,
      minWidth: 160,
      ...$(window).width() <= WIDTH_BREAKPOINT && { maxWidth: 280 },
      closeButton: false,
    }).setContent(`${popupTitle}${popupContent}`);

    const factor = await getFactor(getExistingMap(id));
    L.marker(
      // http://disq.us/p/1c32atj
      [position[0] * factor, position[1] * factor],
      icon ? iconMarker : null,
    ).addTo(existingMap)
      .bindPopup(iconPopup);
  }
}

export default function initGlobalInteractiveMap() {
  window.global.initInteractiveMap();
}
