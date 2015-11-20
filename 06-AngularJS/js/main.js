// ./js/main.js
var App = angular.module('myApp', []);

// ./js/factories/model.js
App.factory('model', function () {
    var movies = [{
            name: 'Finding Dori',
            year: 2017
        }, {
            name: 'Titanic',
            year: 1998
        }, {
            name: 'Relatos salvajes',
            year: 2014
        }];

    return {
        all: function () {
            return angular.copy(movies);
        },
        get: function (index) {
            return angular.copy(movies[index]);
        },
        delete: function (index) {
            movies.splice(index, 1);
        },
        save: function (movie, index) {
            // update
            if (index >= 0 && index < movies.length) {
                movies[index] = movie;
            }
            // new
            else {
                movies.push(movie);
            }
        }
    };
});

// ./js/controllers/list.js
App.controller('listCtrl', ['$rootScope', '$scope', 'model', function ($rootScope, $scope, model) {
        function show() {
            $scope.isVisible = true;
            $scope.movies = model.all();
        }

        $rootScope.$on('show:list', function (event) {
            show();
        });

        $scope.new = function (event) {
            event.preventDefault();
            $scope.isVisible = false;
            $rootScope.$broadcast('show:new');
        };
        $scope.view = function (event, index) {
            event.preventDefault();
            $scope.isVisible = false;
            $rootScope.$broadcast('show:view', index);
        };
        $scope.edit = function (event, index) {
            event.preventDefault();
            $scope.isVisible = false;
            $rootScope.$broadcast('show:edit', index);
        };
        $scope.delete = function (event, index) {
            event.preventDefault();

            model.delete(index);

            alert("The movie " + $scope.movies[index].name + " has been deleted");

            show();
        };

        show();
    }]);

// ./js/controllers/view.js
App.controller('viewCtrl', ['$rootScope', '$scope', 'model', function ($rootScope, $scope, model) {
        function show(index) {
            $scope.isVisible = true;
            $scope.movie = model.get(index);
        }
        function back() {
            $scope.isVisible = false;
            $rootScope.$broadcast('show:list');
        }

        $rootScope.$on('show:view', function (event, index) {
            show(index);
        });

        $scope.back = function (event) {
            event.preventDefault();
            back();
        };
    }]);

// ./js/controllers/form.js
App.controller('formCtrl', ['$rootScope', '$scope', 'model', function ($rootScope, $scope, model) {
        function show(index) {
            current = index;
            $scope.isVisible = true;
            $scope.movie = current === undefined
                    ? {title: '', year: ''}
            : model.get(current);
            $scope.isNew = current === undefined;
        }
        function back() {
            $scope.isVisible = false;
            $rootScope.$broadcast('show:list');
        }

        var current;

        $rootScope.$on('show:new', function () {
            show();
        });
        $rootScope.$on('show:edit', function (event, index) {
            show(index);
        });

        $scope.back = function (event) {
            event.preventDefault();
            back();
        };
        $scope.save = function (event, index) {
            event.preventDefault();

            var nombre = document.getElementById("nombre").value;
            var año = document.getElementById("año").value;
            // ensure that inputs are not empty strings ('' === false)
            if (nombre && año) {
                var peli = {};
                peli = {name: nombre, year: año};
                model.save(peli, index);

                back();
            }
            else {
                alert("You have to fill both text inputs");
            }
            document.getElementById("nombre").value = "";
            document.getElementById("año").value = "";
            
        };
    }]);