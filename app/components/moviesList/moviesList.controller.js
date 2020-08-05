(function() {
    function ListController(MovieService) {
        const ctrl = this;
        ctrl.movieService = MovieService;

        ctrl.$onInit = function() {
            ctrl.movieService.getMovies(this.type)
                .then((response) => {
                    this.moviesPath = response;
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