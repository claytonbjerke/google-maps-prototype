'use strict';

// http://itouchmap.com/latlong.html

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

var marker;

function initMap() {

    var latlng = {
        lat: 35.222195,
        lng: -97.353287
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 12
    });

    map.setOptions({
        styles: styles
    });

    marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

}

setInterval(updateMarker, 500);
var index = 0;
var latLong = [{
        lat: 35.222195,
        lng: -97.353287
},
    {
        lat: 35.218137,
        lng: -97.352600
},
    {
        lat: 35.215463,
        lng: -97.352943
},
    {
        lat: 35.211817,
        lng: -97.352943
},
    {
        lat: 35.209012,
        lng: -97.352943
},
    {
        lat: 35.206206,
        lng: -97.352943
},
    {
        lat: 35.203682,
        lng: -97.352943
},
    {
        lat: 35.200315,
        lng: -97.352600
},
    {
        lat: 35.197229,
        lng: -97.352600
},
    {
        lat: 35.193021,
        lng: -97.352600
},
    {
        lat: 35.190496,
        lng: -97.352600
},
    {
        lat: 35.187690,
        lng: -97.352257
}];

function updateMarker() {

    if (index === latLong.length - 1) {
        index = 0;
    }
    var LatLng = new google.maps.LatLng(latLong[index].lat, latLong[index].lng);
    marker.setPosition(LatLng);

    index++;
};
