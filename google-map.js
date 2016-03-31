'use strict';

// http://itouchmap.com/latlong.html
var latLongs = [{
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
var directionsDisplay;
var request;
var directionsService;

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

    var destination = new google.maps.Marker({
        position: latLongs[latLongs.length - 1],
        map: map
    });



    directionsDisplay = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
            strokeColor: '#0000FF',
            strokeWeight: 5,
            strokeOpacity: 0.5
        },
        suppressMarkers: true
    });

    request = {
        destination: latLongs[latLongs.length - 1],
        origin: latLongs[0],
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

}

setInterval(updateMarker, 300);

var index = 0;

function updateMarker() {

    if (index === latLongs.length - 1) {
        index = 0;
    }
    var LatLng = new google.maps.LatLng(latLongs[index].lat, latLongs[index].lng);
    marker.setPosition(LatLng);

    index++;
};
