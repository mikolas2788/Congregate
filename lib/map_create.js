let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 11,
        styles: mapStyle, 
        mapTypeControl: false,
        streetViewControl: false
    });

    // heatmap = new google.maps.visualization.HeatmapLayer({
    //     data: heatMapData(),
    //     map: map,
    //     radius: 10
    // }); 

    function heatMapData(date, timestamp) {
        let arr = [];
        for (let stationName in finalData) {
            const stationData = finalData[stationName]
            for (let trainLine in stationData) {
                const trainLineData = stationData[trainLine]; 
                const trainLineCoords = trainLineData["COORDS"]; 
                const trainLineDate = trainLineData["DATES"][date] || trainLineData["DATES"]["09/14/2019"]
                if (Boolean(trainLineCoords) && Boolean(trainLineDate)) {
                    let time = trainLineDate[timestamp] || trainLineData["DATES"]["09/14/2019"]["00:00 - 04:00"]; 
                    let googleObj = { location: new google.maps.LatLng(trainLineCoords["LATITUDE"], trainLineCoords["LONGITUDE"]), weight: time }
                    arr.push(googleObj);
                } 
            }
        }
    
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: arr,
            map: map,
            radius: 10
        }); 
    }

    heatMapData("09/14/2019", "16:00 - 20:00"); 
}; 



// // *** Plotting circle station coordinates

// function addStation(coords) {
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

// function stationPlotter() {
//     for (let stationName in stations) {
//         stations[stationName].forEach(station => {
//             addStation({ lat: +station["LATITUDE"], lng: +station["LONGITUDE"] });
//         })
//     }
// }