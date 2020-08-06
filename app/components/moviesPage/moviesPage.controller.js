(function() {
    function MoviesCtrl($location) {
        const ctrl = this;
        ctrl.favourites = function() {
            $location.path('/favourites');
        }
    }
    angular
        .module('moviesPage', ['ngRoute'])
        .controller("MoviesCtrl", MoviesCtrl)
})()