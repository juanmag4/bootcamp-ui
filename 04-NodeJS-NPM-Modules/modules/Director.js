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