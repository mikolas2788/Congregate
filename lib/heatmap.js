// weighted heatmap format - {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5}

    // heatmap = new google.maps.visualization.HeatmapLayer({
    //         data: heatMapData(),
    //         map: map, 
    //         radius: 10
    // }); 

// const heatMapData = []; 
// debugger
// function heatmapTest(data) {
//     debugger
//     for (const stationName in data) {
//         debugger
//         for (const trainLine in data[stationName]) {
//             debugger 
//             const stationObj = data[stationName][trainLine]; 
//             const testCase = stationObj["DATES"]["09/14/2019"]["00:00 - 04:00"]
//             const googleObj = { location: new google.maps.LatLng(stationObj["COORDS"]["LATITUDE"], stationObj["COORDS"]["LONGITUDE"] ), weight: testCase }
//             heatMapData.push(googleObj); 
//             debugger 
//         }
//     }
// }

// debugger
// heatmapTest(finalData); 

// console.log(heatMapData); 

// const fiftyNinth = finalData["59 ST"]["NQR456W"];
// debugger
//     heatmap = new google.maps.visualization.HeatmapLayer({
//             data: heatMapData(),
//             // data: [{ location: new google.maps.LatLng(fiftyNinth["COORDS"]['LATITUDE'], fiftyNinth["COORDS"]['LONGITUDE']), weight: fiftyNinth['DATES']['09/14/2019']['00:00 - 04:00'] }],
//             map: map, 
//             radius: 10
//     }); 