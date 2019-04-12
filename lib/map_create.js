var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 14,
        mapTypeControl: false
    });
    // marker for current location eventually
}

