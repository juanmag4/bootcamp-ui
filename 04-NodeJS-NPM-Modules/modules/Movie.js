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

