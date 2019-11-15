const playButton= document.getElementById('auto-btn');
const modal = document.getElementById('info-modal');
const modalButton = document.getElementById('info-modal-btn');
const modalCloseButton = document.getElementsByClassName('info-close-btn')[0];

function popModal () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) modal.style.display = "none";
}

modalCloseButton.onclick = function () {
    modal.style.display = "none";
}
 
function autoPlay () {
    const date = "09/14/2019";
    const time = [
        "00:00 - 04:00",
        "04:00 - 08:00",
        "08:00 - 12:00",
        "12:00 - 16:00",
        "16:00 - 20:00",
        "20:00 - 00:00"
    ]
    let currentTrain = document.getElementById('train-selector').value;
    debugger 

    // Render the first time after 1 second (The time
    heatmapTime(date, currentTrain, time, 0)
}

function heatmapTime (date, currentTrain, times, index) {
    // Check if we reached the end
    if (times.length >= index) {
        // We reach the end so just return
        return
    }
    debugger
    
    // Render our heatmap
    if (Boolean(heatmap)) heatmap.setMap(null);
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData(currentTrain, date, timestamp),
        map: map,
        radius: 10
    });

    // Render the next one after 1 sec
    setTimeout(function () {
        debugger
        // Start loading the next entry in our times table
        // By incrementing index by 1
        heatmapTime(date, currentTrain, times, index + 1);
    }, 1000)
}
