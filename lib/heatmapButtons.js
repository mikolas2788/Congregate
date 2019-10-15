// debugger

const modal = document.getElementById('info-modal');
const modalButton = document.getElementById('info-modal-btn');


function popModal () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) modal.style.display = "none";
}