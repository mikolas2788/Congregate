let map;
let newArr = []; 

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 13,
        styles: mapStyle, 
        mapTypeControl: false,
        streetViewControl: false
    });

    function addStation (coords) {
        new google.maps.Circle({
            strokeColor: '#FFFFFF',
            strokeOpacity: 0.3,
            strokeWeight: 2,
            fillColor: '#FFFFFF',
            fillOpacity: 0.3,
            map: map,
            center: coords,
            radius: 50
        })
    }

    stations.forEach(station => {
        addStation({ lat: station.latitude, lng: station.longitude })
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: [new google.maps.LatLng(40.765286, -73.9674699)],
        map: map, 
        radius: 25
    });

    // function geocodeAddress(geocoder, resultsMap) {
    //     var address = document.getElementById('address').value;
    //     geocoder.geocode({'address': address}, function(results, status) {
    //       if (status === 'OK') {
    //         resultsMap.setCenter(results[0].geometry.location);
    //         var marker = new google.maps.Marker({
    //           map: resultsMap,
    //           position: results[0].geometry.location
    //         });
    //       } else {
    //         alert('Geocode was not successful for the following reason: ' + status);
    //       }
    //     });
    //   }
}

function addStation (coords) {
    console.log(coords); 
    new google.maps.Circle({
        strokeColor: '#FFFFFF',
        strokeOpacity: 0.3,
        strokeWeight: 2,
        fillColor: '#FFFFFF',
        fillOpacity: 0.3,
        map: map,
        center: coords,
        radius: 50
    })
}

// function geocode (station) {
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//         params: {
//             address: station + 'station, NYC', 
//             key: 'AIzaSyAgudF818cVj9RRgX_oGbCYyungikoaZ3U'
//         }  
//     })
//     .then (function (response) {
//         if (response.data.results[0]) {
//             newArr.push(response.data.results[0].geometry.location)
//         }
//     })
//     .catch (function (error) {
//         console.log(error); 
//     })
// }; 

// station_names.forEach (station => {
//     (geocode(station["STATION"])); 
// });

// newArr.forEach(station => {
//     addStation({ lat: +station.lat, lng: +station.lng }); 
// });

// for (let i = 0; i < newArr.length; i++) {
//     addStation ({ lat: +newArr[i].lat, lng: +newArr[i].lng })
// }


