// import stations from './map_stations'; 

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 13,
        styles: mapStyle, 
        mapTypeControl: false,
        streetViewControl: false
    });

    // function addStation (coords) {
    //     const station = new google.maps.Circle({
    //         strokeColor: '#FFFFFF',
    //         strokeOpacity: 0.8,
    //         strokeWeight: 2,
    //         fillColor: '#FFFFFF',
    //         fillOpacity: 0.35,
    //         map: map,
    //         center: coords,
    //         radius: 50
    //     })
    // }

    // stations.forEach(station => {
    //     addStation({ lat: station.latitude, lng: station.longitude })
    // });

}

