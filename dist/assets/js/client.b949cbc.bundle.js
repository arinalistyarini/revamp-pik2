/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"client": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js?!../node_modules/eslint-loader/dist/cjs.js!../node_modules/eslint-loader/dist/cjs.js!./app-global.js":
/*!******************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib??ref--5-0!../node_modules/eslint-loader/dist/cjs.js!../node_modules/eslint-loader/dist/cjs.js!./app-global.js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: markMap, initInteractiveMap, clearMapMarkers, mapToggleLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_interactive_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/interactive-map */ \"./assets/scripts/interactive-map.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"markMap\", function() { return _assets_scripts_interactive_map__WEBPACK_IMPORTED_MODULE_0__[\"markMap\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"initInteractiveMap\", function() { return _assets_scripts_interactive_map__WEBPACK_IMPORTED_MODULE_0__[\"initInteractiveMap\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clearMapMarkers\", function() { return _assets_scripts_interactive_map__WEBPACK_IMPORTED_MODULE_0__[\"clearMapMarkers\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mapToggleLoader\", function() { return _assets_scripts_interactive_map__WEBPACK_IMPORTED_MODULE_0__[\"mapToggleLoader\"]; });\n\n\n\n\n//# sourceURL=webpack:///./app-global.js?../node_modules/babel-loader/lib??ref--5-0!../node_modules/eslint-loader/dist/cjs.js!../node_modules/eslint-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/expose-loader/index.js?global!./app-global.js-exposed":
/*!********************************************************************!*\
  !*** ../node_modules/expose-loader?global!./app-global.js-exposed ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"global\"] = __webpack_require__(/*! -!../node_modules/babel-loader/lib??ref--5-0!../node_modules/eslint-loader/dist/cjs.js!../node_modules/eslint-loader/dist/cjs.js!./app-global.js */ \"../node_modules/babel-loader/lib/index.js?!../node_modules/eslint-loader/dist/cjs.js!../node_modules/eslint-loader/dist/cjs.js!./app-global.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./app-global.js-exposed?../node_modules/expose-loader?global");

/***/ }),

/***/ "./assets/scripts/interactive-map.js":
/*!*******************************************!*\
  !*** ./assets/scripts/interactive-map.js ***!
  \*******************************************/
/*! exports provided: clearMapMarkers, interactiveMapAddOnsPositionAndClearSearch, mapToggleLoader, initInteractiveMap, markMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMapMarkers\", function() { return clearMapMarkers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interactiveMapAddOnsPositionAndClearSearch\", function() { return interactiveMapAddOnsPositionAndClearSearch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapToggleLoader\", function() { return mapToggleLoader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initInteractiveMap\", function() { return initInteractiveMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markMap\", function() { return markMap; });\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ \"../node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet_responsive_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-responsive-popup */ \"../node_modules/leaflet-responsive-popup/leaflet.responsive.popup.js\");\n/* harmony import */ var leaflet_responsive_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_responsive_popup__WEBPACK_IMPORTED_MODULE_1__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable no-underscore-dangle */\n\n\nvar initiatedMaps = [];\nvar INTERACTIVE_MAP = '.interactive-map';\nvar INTERACTIVE_MAP_NOTES = '.interactive-map-notes';\nvar INTERACTIVE_MAP_SEARCHES = '.interactive-map-search';\nvar INTERACTIVE_MAP_LOADER = '.interactive-map-loader';\nvar WIDTH_BREAKPOINT = 991;\nfunction clearMapMarkers(id) {\n  if (initiatedMaps.length) {\n    var existingMap = initiatedMaps.find(function (map) {\n      return id === map._container.id;\n    }); // https://stackoverflow.com/a/62545611\n\n    existingMap.eachLayer(function (layer) {\n      if (layer._popup) {\n        layer.remove();\n      }\n    });\n  }\n} // re-position search & notes\n\nfunction interactiveMapAddOnsPositionAndClearSearch(id) {\n  var notes = id ? $(\"#\".concat(id)).find(INTERACTIVE_MAP_NOTES) : $(INTERACTIVE_MAP_NOTES);\n\n  if (notes) {\n    notes.each(function eachNote() {\n      var note = $(this);\n      var noteMapWrapper = note.parents(INTERACTIVE_MAP).length ? note.parents(INTERACTIVE_MAP) : notes.prev(INTERACTIVE_MAP); // smaller viewport\n\n      if ($(window).width() <= WIDTH_BREAKPOINT) {\n        if (note.length && noteMapWrapper) {\n          noteMapWrapper.after(note);\n        }\n      } else if (note.length && noteMapWrapper) {\n        note.appendTo(noteMapWrapper);\n      }\n    });\n  }\n\n  var searches = id ? $(\"#\".concat(id)).find(INTERACTIVE_MAP_SEARCHES) : $(INTERACTIVE_MAP_SEARCHES);\n\n  if (searches) {\n    searches.each(function eachSearch() {\n      var search = $(this);\n      var searchMapWrapper = search.parents(INTERACTIVE_MAP).length ? search.parents(INTERACTIVE_MAP) : search.next(INTERACTIVE_MAP); // smaller viewport\n\n      if ($(window).width() <= WIDTH_BREAKPOINT) {\n        if (search.length && searchMapWrapper) {\n          searchMapWrapper.before(search);\n        }\n      } else if (search.length && searchMapWrapper) {\n        search.prependTo(searchMapWrapper);\n      } // -- search\n\n\n      var searchInput = search.find('input');\n      var searchEraser = search.find('.map-clear-search');\n\n      if (searchInput.length) {\n        searchInput.on('input', function searchOnInput() {\n          if (this.value) {\n            searchEraser.addClass('shown');\n          } else {\n            searchEraser.removeClass('shown');\n          }\n        });\n      }\n\n      searchEraser.on('click', function () {\n        if (searchInput.val()) {\n          searchInput.val('');\n          searchEraser.removeClass('shown');\n          clearMapMarkers(id);\n        }\n      });\n    });\n  }\n}\nfunction mapToggleLoader(id, isLoading) {\n  if (initiatedMaps.length) {\n    var selectedMap = initiatedMaps.find(function (map) {\n      return id === map._container.id;\n    });\n    var mapDOM = $(\"#\".concat(id));\n    var loader = mapDOM.find(INTERACTIVE_MAP_LOADER);\n    var search = mapDOM.find(\"\".concat(INTERACTIVE_MAP_SEARCHES)).length ? mapDOM.find(\"\".concat(INTERACTIVE_MAP_SEARCHES)) : mapDOM.prev(INTERACTIVE_MAP_SEARCHES);\n    var searchInput = search.find('input');\n\n    if (loader.length) {\n      if (isLoading) {\n        loader.addClass('shown');\n\n        selectedMap._handlers.forEach(function (handler) {\n          handler.disable();\n        });\n\n        searchInput.attr('disabled', true);\n      } else {\n        loader.removeClass('shown');\n\n        selectedMap._handlers.forEach(function (handler) {\n          handler.enable();\n        });\n\n        searchInput.removeAttr('disabled');\n      }\n    }\n  }\n}\nfunction initInteractiveMap(id) {\n  interactiveMapAddOnsPositionAndClearSearch(id);\n  var interactiveMap = id ? $(\"#\".concat(id).concat(INTERACTIVE_MAP)) : $(INTERACTIVE_MAP_NOTES);\n\n  if (interactiveMap) {\n    interactiveMap.each(function eachInteractiveMap() {\n      var _this = this;\n\n      // https://codepen.io/joelf/pen/bjdMww\n      // Using leaflet.js to pan and zoom a big image.\n      // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html\n      var mapId = $(this).attr('id');\n      var mapImage = $(this).attr('img-src');\n      var backgroundColor = $(this).attr('background-color'); // give background color if any\n\n      if (backgroundColor) $(this).css('background-color', backgroundColor);\n\n      if (leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomUtil.get(mapImage)) {\n        leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomUtil.get(mapImage).remove();\n      } // dimensions of the image map\n\n\n      var mapImageElement = new Image();\n      mapImageElement.src = mapImage; // image finish loading\n      // https://stackoverflow.com/a/60971078\n\n      mapImageElement.decode().then(function () {\n        var mapWidth = mapImageElement.width;\n        var mapHeight = mapImageElement.height;\n        var minZoom = parseFloat($(_this).attr('min-zoom') || 2.25);\n        var maxZoom = parseFloat($(_this).attr('max-zoom') || 4);\n        var zoom = parseFloat($(_this).attr('zoom') || 2.25);\n        var map = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.map(mapId, {\n          minZoom: minZoom,\n          maxZoom: maxZoom,\n          zoom: zoom,\n          // center: [mapHeight / 2, mapWidth / 2],\n          center: [0, 0],\n          crs: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.CRS.Simple,\n          zoomControl: false\n        });\n        initiatedMaps.push(map); // zoom control\n\n        leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.control.zoom({\n          position: 'topright'\n        }).addTo(map); // calculate the edges of the image, in coordinate space\n\n        var southWest = map.unproject([0, mapHeight], map.getMaxZoom() - 1);\n        var northEast = map.unproject([mapWidth, 0], map.getMaxZoom() - 1);\n        var bounds = new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.LatLngBounds(southWest, northEast); // add the image overlay,\n        // so that it covers the entire map\n\n        leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.imageOverlay(mapImage, bounds).addTo(map); // tell leaflet that the map is exactly as big as the image\n\n        map.setMaxBounds(bounds);\n      });\n    });\n  }\n}\nfunction markMap(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      position = _ref.position,\n      content = _ref.content,\n      icon = _ref.icon,\n      color = _ref.color;\n\n  if (initiatedMaps.length) {\n    var existingMap = initiatedMaps.find(function (map) {\n      return id === map._container.id;\n    });\n    var iconMarker = {\n      icon: leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.divIcon({\n        className: \"icon-marker \".concat(color),\n        html: \"<i class='icon-pik \".concat(icon, \"'><i>\")\n      })\n    };\n    var popupTitle = \"<div class='popup-title'>\".concat(title, \"</div>\");\n    var popupContent = content ? \"<div class='popup-content-detail'>\".concat(content, \"</div>\") : '';\n    var iconPopup = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.responsivePopup(_objectSpread({\n      hasTip: false,\n      autoPan: true,\n      className: \"marker-popup \".concat(color),\n      minWidth: 160\n    }, $(window).width() <= WIDTH_BREAKPOINT && {\n      maxWidth: 280\n    }, {\n      closeButton: false\n    })).setContent(\"\".concat(popupTitle).concat(popupContent));\n    leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.marker(position, icon ? iconMarker : null).addTo(existingMap).bindPopup(iconPopup);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./assets/scripts/interactive-map.js?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi expose-loader?global!./app-global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! expose-loader?global!./app-global.js */\"../node_modules/expose-loader/index.js?global!./app-global.js-exposed\");\n\n\n//# sourceURL=webpack:///./app-global.js?multi_expose-loader?global");

/***/ })

/******/ });