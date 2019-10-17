const playButton= document.getElementById('auto-btn');
const modal = document.getElementById('info-modal');
const modalButton = document.getElementById('info-modal-btn');

function popModal () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) modal.style.display = "none";
}

function autoPlay () {
    let heatmap; 
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
    time.forEach(timestamp => {
        debugger
        setTimeout(function() {
            debugger 
            if (Boolean(heatmap)) heatmap.setMap(null);
            heatmap = new google.maps.visualization.HeatmapLayer({
                data: heatMapData(currentTrain, date, timestamp),
                map: map,
                radius: 10
            }); 
        }, 1000)
    })
}