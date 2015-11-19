$(window).ready(function () {
    var dropZone = document.getElementById('soltar');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
});

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById('soltar').value = event.target.result;
    };
    reader.readAsText(files[0], "UTF-8");
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}
