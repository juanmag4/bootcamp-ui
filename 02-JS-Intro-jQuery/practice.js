$(window).ready(function () {
    $("section").fadeIn(3000);
    $(".alias").focus();
    $("#yourname").click(function () {
        var nombre = "Juan";
        $.ajax({
            url: "http://bootcamp.aws.af.cm/welcome/" + nombre,
            type: "get",
            datatype: "json",
            success: function (data) {
                $(".result").text(data.response);
            },
            error: function () {
                alert("Ha ocurrido un error");
                $("section").css("color", "red");
            }
        });
    });
    $("#spoty").click(function () {
        var cont = 0;
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=Rolling%20Stones&type=album",
            type: "get",
            datatype: "json",
            success: function (data) {
                $(".resultado").text(data.response);
                console.log(data.albums);
                console.log(data.albums.items[1].name);
                data.albums.items.forEach(function () {
                    $(".spotify").append("<article class='bordes'>");
                    $(".spotify").append("<p>" + data.albums.items[cont].name + "</p>");
                    $(".spotify").append("<p>" + data.albums.items[cont].type + "</p>");
                    $(".spotify").append("<img src='" + data.albums.items[cont].images[0].url + "' style='width:256px;height:256px;'>" + "<br>");
                    $(".spotify").append("<a href='" + data.albums.items[cont].external_urls.spotify + "'>" + "Descubrilo en Spotify" + "</a>");
                    $(".spotify").append("</article>");
                    cont++;
                });
            },
            error: function () {
                alert("Ha ocurrido un error");
            }
        });
    });
    $("#buscar").click(function () {
        var cont = 0;
        var artista = "";
        artista = $("#artista").text();
        $.ajax({
            url: "https://api.spotify.com/v1/search?q=" + artista +"&type=album",
            type: "get",
            datatype: "json",
            success: function (data) {
                $(".resultado").text(data.response);
                console.log(data.albums);
                console.log(data.albums.items[1].name);
                data.albums.items.forEach(function () {
                    $(".spotify").append("<article class='bordes'>");
                    $(".spotify").append("<p>" + data.albums.items[cont].name + "</p>");
                    $(".spotify").append("<p>" + data.albums.items[cont].type + "</p>");
                    $(".spotify").append("<img src='" + data.albums.items[cont].images[0].url + "' style='width:256px;height:256px;'>" + "<br>");
                    $(".spotify").append("<a href='" + data.albums.items[cont].external_urls.spotify + "'>" + "Descubrilo en Spotify" + "</a>");
                    $(".spotify").append("</article>");
                    cont++;
                });
            },
            error: function () {
                alert("Ha ocurrido un error");
            }
        });
    });
});



