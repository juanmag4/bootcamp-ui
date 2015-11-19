$(window).ready(function(){
    $('#localStorage').click(function(){
        var texto = $('#textSave').val();
        localStorage.setItem("textArea", texto);
        alert(localStorage.getItem("textArea") + " has been saved");
    });
    $('#clear').click(function(){
        localStorage.removeItem("textArea");
        alert("The data has been erase");
    });
});