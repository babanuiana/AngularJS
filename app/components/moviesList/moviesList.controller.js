(function() {
    function ListController(MovieService, ) {
        const ctrl = this;
        ctrl.movieService = MovieService;

        ctrl.$onInit = function() {
            ctrl.movieService.getMovies(ctrl.type)
                .then((response) => {
                    ctrl.moviesPath = response;
                })
                .catch(() => {

                    ctrl.message = "Something went wrong, reload the page and try again"

                })
        }
    }
    angular
        .module('list', [])
        .controller("ListController", ListController)
        .component('list', {
            templateUrl: 'components/moviesList/moviesList.view.html',
            bindings: { type: '@', title: '@' },
            controller: 'ListController'
        })
})()