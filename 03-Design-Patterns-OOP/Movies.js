function Movie(title, genre, minutes, rating) {
    this.title = title;
    this.genre = genre;
    this.minutes = minutes;
    this.rating = rating;
    this.actor = [];

    console.log("Se ha creado una instancia del objeto movie");
};

Movie.prototype.setTitle = function (title) {
    this.title = title;
};

Movie.prototype.setGenre = function (genre) {
    this.genre = genre;
};

Movie.prototype.setMinutes = function (minutes) {
    this.minutes = minutes;
};

Movie.prototype.setRating = function (rating) {
    this.rating = rating;
};

Movie.prototype.getTitle = function () {
    return this.title;
};

Movie.prototype.getGenre = function () {
    return this.genre;
};

Movie.prototype.getMinutes = function () {
    return this.minutes;
};

Movie.prototype.getRating = function () {
    return this.rating;
};

Movie.prototype.play = function () {
    return "Playing " + this.title;
};

Movie.prototype.stop = function () {
    return "Stop playing " + this.title;
};

Movie.prototype.setActor = function (aux) {
    this.actor.push(aux);
    console.log("Se ha agregado el actor " + aux.get("name") + " correctamente");
};

Movie.prototype.getActor = function () {
    var cadena = "Los actores de la pelicula son: ";
    for (var i = 0; i < this.actor.length; i++) {
        cadena += this.actor[i].get("name");
        if (i < this.actor.length - 1) {
            cadena += ", ";
        }
        else {
            cadena += ".";
        }
    };
    return console.log(cadena);
};

function MovieObserver() {

};

//Module Pattern
function MovieModule() {
    var title;
    var minutes;
    var genre;
    var rating;

    return{
        setTitle: function (aux) {
            title = aux;
        },
        getTitle: function () {
            return title;
        },
        setMinutes: function (aux) {
            minutes = aux;
        },
        getMinutes: function () {
            return minutes;
        },
        setGenre: function (aux) {
            genre = aux;
        },
        getGenre: function () {
            return genre;
        },
        setRating: function (aux) {
            rating = aux;
        },
        getRating: function () {
            return rating;
        }
    };
};

function DownloadableMovie(title, genre, minutes, rating) {
    Movie.call(this, title, genre, minutes, rating);
};

DownloadableMovie.prototype.download = function () {
    console.log("Download method");
};

//Funcion que encontre en http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/
//para utilizar en vez de extend()
function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);

    copyOfParent.constructor = childObject;

    childObject.prototype = copyOfParent;
};

var Social = function () {
};

Social.prototype = {
    share: function (friendName) {
        console.log("Sharing " + this.title + " with " + friendName);
    },
    like: function () {
        console.log("Like");
    }
};

//No pude aplicar extend() asi que utilize un funcion augment() que encontre en
//la seccion The Mixin Pattern en http://addyosmani.com/resources/essentialjsdesignpatterns/book/
function augment(receivingClass, givingClass) {
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    else {
        for (var methodName in givingClass.prototype) {

            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
};

//En esta "clase" utilize attributes : hashmap 
var Actor = function (name) {
    this.attributes = {};

    this.set('name', name || 'Unknown');
};

Actor.prototype.set = function (attr, value) {
    this.attributes[attr] = value;
};

Actor.prototype.get = function (attr) {
    return this.attributes[attr];
};

//Use la funcion augment() porque no me funciona la funcion extend()
//No se si esta funcion cumple con la consigna de los puntos 8 y 10
augment(DownloadableMovie, Movie);
augment(Movie, Social);

//Pruebas del Objeto Movie
var ironMan = new Movie("Iron Man 2", "Action", "160", "8.0");
ironMan.setTitle("Los Locos Adams");
ironMan.title = "Iron Man";
console.log(ironMan.play());

//Pruebas del Module Pattern
var ironMan2 = MovieModule();
ironMan2.setTitle("Iron Man 2");
console.log(ironMan2.getTitle());
console.log(ironMan2.title);

//No pude aplicar extend() asi que utilize un funcion augment() que encontre en
//la seccion The Mixin Pattern en http://addyosmani.com/resources/essentialjsdesignpatterns/book/
movie = new DownloadableMovie("Ant-Man", "Action", "160", "8.0");
console.log(movie.getTitle());
movie.download();

//Pruebas del mixin object Social
avengers = new Movie("The Avengers", "Action", "160", "8.0");
avengers.share("Marcos");

//Prueba de objetos Actor
var actor1 = new Actor("Robert Downey Jr.");
var actor2 = new Actor("Terrence Howard");
var actor3 = new Actor("Jeff Bridges");
actor1.set("age", 55);
console.log(actor1.get("name") + " is " + actor1.get("age") + " years old");

//Prueba de agregar actores a una instancia de Movie, y poder mostrarlos por consola
ironMan.setActor(actor1);
ironMan.setActor(actor2);
ironMan.setActor(actor3);
ironMan.getActor();