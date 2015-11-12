(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Director(name) {
    this.attributes = {};
    this.name = "";
    this.quotes = [];

    this.set('name', name || 'Unknown');
}


Director.prototype.set = function (attr, value) {
    this.attributes[attr] = value;
};
Director.prototype.get = function (attr) {
    return this.attributes[attr];
};
Director.prototype.speak = function () {
    var cadena = "";
    cadena = this.get("name") + " says: ";
    for (var i = 0; i < this.quotes.length ; i++) {
        cadena +=this.quotes[i] + ", ";
    }
    console.log(cadena);
};

Director.prototype.setQuotes = function (aux) {
    this.quotes.push(aux);
};

exports.director = Director;
},{}],2:[function(require,module,exports){
function Movie(title, genre, minutes, rating) {
    this.title = title;
    this.genre = genre;
    this.minutes = minutes;
    this.rating = rating;
    this.director;

    console.log("Se ha creado una instancia del objeto movie");
}

require('./Director').director;

Movie.prototype.setDirector = function (aux) {
    this.director = aux;
};

Movie.prototype.getDirector = function(){
    return this.director;
};

exports.movie = Movie;


},{"./Director":1}],3:[function(require,module,exports){
var movie = require('./modules/Movie').movie;
var director = require('./modules/Director').director;

avengers = new movie("The Avengers", "Action", "160", "8.0");
whedon = new director("Joss Whedon");
whedon.setQuotes("Cast is everything");
whedon.setQuotes("Do what ...");
avengers.setDirector(whedon);
avengers.getDirector().speak();

},{"./modules/Director":1,"./modules/Movie":2}]},{},[3]);
