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
    let dateSelector, date, currentTrain; 
    dateSelector = document.getElementById('date-selector').value; 
    date = dateSelector ? dateSelector : "09/14/2019";
    currentTrain = document.getElementById('train-selector').value;

    const timestamps = [
        "00:00 - 04:00",
        "04:00 - 08:00",
        "08:00 - 12:00",
        "12:00 - 16:00",
        "16:00 - 20:00",
        "20:00 - 00:00"
    ]

    heatmapTime (date, currentTrain, timestamps, 0)
}

function heatmapTime (date, currentTrain, timestamps, index) {

    document.getElementById('date-selector').value = date; 
    document.getElementById('timestamp-selector').value = timestamps[index]; 

    if (index >= timestamps.length) return; 

    if (Boolean(heatmap)) heatmap.setMap(null);
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData(currentTrain, date, timestamps[index]),
        map: map,
        radius: 10
    });  

    setTimeout(function () {
        heatmapTime(date, currentTrain, timestamps, index+1); 
    }, 1000); 
}