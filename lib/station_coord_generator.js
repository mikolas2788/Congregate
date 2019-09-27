// Turnstile structure
// entries = {
//     stationName: {
//         trainLines: {
//             controlArea:
//             remoteUnit:
//             date: {
//                 actual_date: {
//                     timestamp: xxx
//                 }
//             }
//         }
//     }
// }

// Chris Wong's filtered data
// stationCoords = { 
//      controlArea: { 
//          stationName: 
//          remoteUnit: []
//          LINE:
//          LATITUDE:
//          LONGITUDE:
//     }
// }

// Final Data set
// station name, date, timestamp, entries, exits,
// line, longitude, latitude, 
// array of all google latlng object
// { stationName: 
//      {   date: { timestamp: [ entries, exits ] },
//          line: 'str', 
//          coords: { latitude, longitude },
//          alias: 'str',
//          remote: [ 123 ]
//          booth: [ R1222 ]
//      } 
// } 

// console.log(turnstileEntries); 
// console.log(stationCoords);

// Valid Station checker
// let validStations = {}; 
// let validStationsCounter = 0; 
// let badStations = [];
// // debugger 
// for (let stationName in entries) {
//     // debugger 
//     if (stationName in stations) {
//         // debugger
//         validStations[stationName] = entries[stationName]; 
//         validStationsCounter++; 
//     } else {
//         badStations.push(stationName);
//     }
// }

// console.log(validStations, "valid stations:", validStationsCounter); 
// console.log(badStations, "bad stations:", badStations.length); 

// Excel 
// let entryNames = []; 
// let stationNames = []; 
// for (let stationName in entries) {
//     entryNames.push(stationName)
// }
// for (let stationName in stations) {
//     stationNames.push(stationName)
// }
// console.log(entryNames);
// console.log(stationNames); 

