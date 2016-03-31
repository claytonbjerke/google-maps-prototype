'use strict';

var map;

var styles = [{
  stylers: [{
    hue: "#00ffe6"
  }, {
    saturation: -20
  }]
}, {
  featureType: "road",
  elementType: "geometry",
  stylers: [{
    lightness: 100
  }, {
    visibility: "simplified"
  }]
}, {
  featureType: "road",
  elementType: "labels",
  stylers: [{
    visibility: "off"
  }]
}];

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -34.397,
      lng: 150.644
    },
    zoom: 8
  });

  map.setOptions({
    styles: styles
  });
}
