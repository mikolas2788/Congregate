let map;

// console.log(stations); 

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

// stations[stationName][0]['LATITUDE']

// weighted heatmap format - {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5}
    const stationCoords = [];
    
    for (let stationName in stations) {
        stations[stationName].forEach (station => {
            // stationCoords.push(new google.maps.LatLng(station['LATITUDE'], station['LONGITUDE'])); 
            stationCoords.push({location: new google.maps.LatLng(station['LATITUDE'], station['LONGITUDE']), weight: 100}); 
        });
    }; 
    
    // console.log(stationCoords); 

    var gradient = [
    //   'rgba(0, 255, 255, 0)',
      'rgba(0, 255, 255, 1)',
      'rgba(0, 191, 255, 1)',
      'rgba(0, 127, 255, 1)',
      'rgba(0, 63, 255, 1)',
      'rgba(0, 0, 255, 1)',
      'rgba(0, 0, 223, 1)',
      'rgba(0, 0, 191, 1)',
      'rgba(0, 0, 159, 1)',
      'rgba(0, 0, 127, 1)',
      'rgba(63, 0, 91, 1)',
      'rgba(127, 0, 63, 1)',
      'rgba(191, 0, 31, 1)',
      'rgba(255, 0, 0, 1)'
    ]
    heatmap = new google.maps.visualization.HeatmapLayer({
            data: stationCoords,
            map: map, 
            radius: 10,
            gradient: gradient 
    }); 

    heatmap.setMap(map); 

    // // Plotting circle station coordinates
    // for (let stationName in stations) {
    //     stations[stationName].forEach (station => {
    //         addStation({ lat: +station["LATITUDE"], lng: +station["LONGITUDE"] }); 
    //     })
    // }
    
    // // heatmap testing
    // heatmap = new google.maps.visualization.HeatmapLayer({
    //     data: [new google.maps.LatLng(40.765286, -73.9674699)],
    //     map: map, 
    //     radius: 25
    // });

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

// function addStation (coords) {
//     console.log(coords); 
//     new google.maps.Circle({
//         strokeColor: '#FFFFFF',
//         strokeOpacity: 0.3,
//         strokeWeight: 2,
//         fillColor: '#FFFFFF',
//         fillOpacity: 0.3,
//         map: map,
//         center: coords,
//         radius: 50
//     })
// }

// function geocode (station) {
//     axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//         params: {
//             address: station + ' station, NYC', 
//             key: 'AIzaSyAgudF818cVj9RRgX_oGbCYyungikoaZ3U'
//         }  
//     })
//     .then (function (response) {
//         if (response.data.results[0]) {
//             //parse for proper results for station
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


