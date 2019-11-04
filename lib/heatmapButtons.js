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

    for (let i = 0; i < time.length; i++) {
        debugger
        heatmapTime(date, currentTrain, time[i])
        debugger
    }
}

function heatmapTime (date, currentTrain, timestamp) {
    debugger
    if (Boolean(heatmap)) heatmap.setMap(null);
    setTimeout(function () {
        debugger
        heatmap = new google.maps.visualization.HeatmapLayer({
            data: heatMapData(currentTrain, date, timestamp),
            map: map,
            radius: 10
        });
    }, 1000)
}