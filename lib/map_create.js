let map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.765286, lng: -73.9674699 },
        zoom: 12,
        styles: mapStyle, 
        mapTypeControl: false,
        streetViewControl: false
    });
    heatMapRender(); 
}; 

function heatMapRender() {
    let currentDate = document.getElementById('date-selector').value;
    let currentTimestamp = document.getElementById('timestamp-selector').value;
    if (Boolean(heatmap)) heatmap.setMap(null); 
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData(currentDate, currentTimestamp),
        map: map,
        radius: 10
    }); 
}

function heatMapData(date, timestamp) {
    let arr = [];
    for (let stationName in finalData) {
        const stationData = finalData[stationName]
        for (let trainLine in stationData) {
            const trainLineData = stationData[trainLine]; 
            const trainLineCoords = trainLineData["COORDS"]; 
            const trainLineDate = Boolean(date) ? trainLineData["DATES"][date] : trainLineData["DATES"]["09/14/2019"]
            if (Boolean(trainLineCoords) && Boolean(trainLineDate)) {
                let time = Boolean(timestamp) ? trainLineDate[timestamp] : trainLineDate["00:00 - 04:00"]; 
                let googleObj = { location: new google.maps.LatLng(trainLineCoords["LATITUDE"], trainLineCoords["LONGITUDE"]), weight: time }
                arr.push(googleObj);
            } 
        }
    }
    return arr; 
}

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