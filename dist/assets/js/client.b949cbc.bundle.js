!function(n){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],p=0,l=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);for(f&&f(t);l.length;)l.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],r=!0,c=1;c<e.length;c++){var u=e[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),n=i(i.s=e[0]))}return n}var r={},a={2:0},o=[];function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=r,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)i.d(e,r,function(t){return n[t]}.bind(null,r));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;o.push([31,0]),e()}({3:function(n,t,e){"use strict";(function(n){e.d(t,"d",(function(){return b})),e.d(t,"b",(function(){return x})),e.d(t,"g",(function(){return O})),e.d(t,"h",(function(){return j})),e.d(t,"a",(function(){return T})),e.d(t,"f",(function(){return S})),e.d(t,"e",(function(){return D})),e.d(t,"j",(function(){return E})),e.d(t,"i",(function(){return W})),e.d(t,"c",(function(){return H}));var r=e(4),a=e.n(r),o=e(0),i=e.n(o),c=e(1),u=e.n(c);e(12);function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){a()(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var p=[],l=".interactive-map",d=".interactive-map-notes",h=".interactive-map-search",v=".interactive-map-loader",g=".interactive-map-request",w=991;function m(t){return n(t._container).attr("id")&&n(t._container).attr("id"),t._container.id}function b(n){return p.find((function(t){return n===m(t)}))}function x(n){if(p.length){var t=b(n);t&&t.eachLayer((function(n){n._popup&&n.remove()}))}}function y(t,e){var r=n("#".concat(m(t))),a=(r.find("".concat(h)).length?r.find("".concat(h)):r.prev(h)).find("input");e?(t._handlers.forEach((function(n){n.enable()})),a.removeAttr("disabled")):(t._handlers.forEach((function(n){n.disable()})),a.attr("disabled",!0))}function O(t){n(l)&&n(l).each((function(){var e=n(this).attr("id"),r=window.global.getExistingMap(e),a=n(this).find(g);a.length&&(a.addClass("shown"),y(r,!1),a.find(".text-request").html(t))}))}function j(t,e,r){if(p.length){var a=n("#".concat(t)).find(v),o=b(t);a.length&&(e?(a.addClass("shown"),y(o,!1)):(a.removeClass("shown"),y(o,!0))),r?a.addClass("solid"):a.removeClass("solid")}}function P(n){var t;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Image).src=n,e.next=4,i.a.awrap(t.decode());case 4:return e.abrupt("return",{width:t.width,height:t.height});case 5:case"end":return e.stop()}}))}function k(t){var e,r,a;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=m(t),r=n("#".concat(e)).attr("img-src"),o.next=4,i.a.awrap(P(r));case 4:return a=o.sent,o.abrupt("return",a);case 6:case"end":return o.stop()}}))}function M(t){var e=m(t);return n("#".concat(e))}function C(n){var t,e,r,a,o,c;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,i.a.awrap(k(n));case 2:if(t=u.sent,e=M(n),r=t.width/t.height,a=e.innerWidth()/e.innerHeight(),o=e.innerWidth()/t.width,c=e.innerHeight()/t.height,!(r>a)){u.next=10;break}return u.abrupt("return",c);case 10:return u.abrupt("return",o);case 11:case"end":return u.stop()}}))}function _(n){var t,e,r;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(C(n));case 2:return t=a.sent,a.next=5,i.a.awrap(k(n));case 5:return e=a.sent,r=[[0,0],[e.height*t,e.width*t]],a.abrupt("return",r);case 8:case"end":return a.stop()}}))}function T(n){var t,e,r,a,o,c,u;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.a.awrap(_(n));case 2:if(s.t0=s.sent,s.t0){s.next=5;break}s.t0=[[],[]];case 5:return t=s.t0,e=t[1][0]/2,r=t[1][1]/2,s.next=10,i.a.awrap(C(n));case 10:return a=s.sent,n.options.minZoom=a,o=M(n),s.next=15,i.a.awrap(k(n));case 15:c=s.sent,u=Math.ceil(Math.log(o.innerWidth()/c.width>o.innerHeight()/c.height?c.width/o.innerWidth():c.height/o.innerHeight())/Math.log(2)),n.options.maxZoom=u,n.setView([e,r],a);case 19:case"end":return s.stop()}}))}function S(t){var e=t?n("#".concat(t)).find(d):n(d);e&&e.each((function(){var t=n(this),r=t.parents(l).length?t.parents(l):e.prev(l);n(window).width()<=w?t.length&&r&&r.after(t):t.length&&r&&t.appendTo(r)}));var r=t?n("#".concat(t)).find(h):n(h);r&&r.each((function(){var e=n(this),r=e.parents(l).length?e.parents(l):e.next(l);n(window).width()<=w?e.length&&r&&r.before(e):e.length&&r&&e.prependTo(r);var a=e.find("input"),o=e.find(".map-clear-search");a.length&&a.on("input",(function(){this.value?o.addClass("shown"):o.removeClass("shown")})),o.on("click",(function(){a.val()&&(a.val(""),o.removeClass("shown"),x(t),T(b(t)))}))}))}function D(t){var e=n(t?"#".concat(t).concat(l):l);e&&e.each((function(){var t,e,r,a,o,c;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return S(t=n(this).attr("id")),e=n(this).attr("img-src"),(r=n(this).attr("background-color"))&&n(this).css("background-color",r),u.a.DomUtil.get(e)&&u.a.DomUtil.get(e).remove(),1,4,1,a=u.a.map(t,{minZoom:1,maxZoom:4,zoom:1,center:[0,0],crs:u.a.CRS.Simple,zoomControl:!1}),p.push(a),j(t,!0,!0),u.a.control.zoom({position:"topright"}).addTo(a),s.next=15,i.a.awrap(_(a));case 15:return o=s.sent,u.a.imageOverlay(e,o).addTo(a),a.setMaxBounds(o),c=function(n){return new Promise((function(t){return setTimeout((function(){T(a),t()}),n)}))},s.next=21,i.a.awrap(c(800));case 21:setTimeout((function(){j(t,!1)}),400);case 22:case"end":return s.stop()}}),null,this)}))}function E(n){var t;return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(C(n));case 2:t=e.sent,n.on("click",(function(n){console.log({lat:n.latlng.lat/t,lng:n.latlng.lng/t})}));case 4:case"end":return e.stop()}}))}function W(t){var e,r,a,o,c,s,l,d,h,v,g,m;return i.a.async((function(x){for(;;)switch(x.prev=x.next){case 0:if(e=t.id,r=t.title,a=t.position,o=t.content,c=t.icon,s=t.color,!p.length){x.next=11;break}return l=b(e),d={icon:u.a.divIcon({className:"icon-marker ".concat(s),html:"<i class='icon-pik ".concat(c,"'><i>")})},h="<div class='popup-title'>".concat(r,"</div>"),v=o?"<div class='popup-content-detail'>".concat(o,"</div>"):"",g=u.a.responsivePopup(f({hasTip:!1,className:"marker-popup ".concat(s),minWidth:160},n(window).width()<=w&&{maxWidth:280},{closeButton:!1})).setContent("".concat(h).concat(v)),x.next=9,i.a.awrap(C(b(e)));case 9:m=x.sent,u.a.marker([a[0]*m,a[1]*m],c?d:null).addTo(l).bindPopup(g);case 11:case"end":return x.stop()}}))}function H(){window.global.initInteractiveMap()}}).call(this,e(2))},31:function(n,t,e){n.exports=e(32)},32:function(n,t,e){(function(t){n.exports=t.global=e(33)}).call(this,e(11))},33:function(n,t,e){"use strict";e.r(t);var r=e(3);e.d(t,"markMap",(function(){return r.i})),e.d(t,"initInteractiveMap",(function(){return r.e})),e.d(t,"clearMapMarkers",(function(){return r.b})),e.d(t,"mapToggleLoader",(function(){return r.h})),e.d(t,"getExistingMap",(function(){return r.d})),e.d(t,"centeringMap",(function(){return r.a})),e.d(t,"toggleCoordinateLog",(function(){return r.j}))}});