var movie = require('./modules/Movie').movie;
var director = require('./modules/Director').director;
require('./modules/jquery-2.1.4');

avengers = new movie("The Avengers", "Action", "160", "8.0");
whedon = new director("Joss Whedon");
whedon.setQuotes("Cast is everything");
whedon.setQuotes("Do what ...");
avengers.setDirector(whedon);
avengers.getDirector().speak();
