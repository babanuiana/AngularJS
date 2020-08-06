(function() {
    function ListController(MovieService) {
        const ctrl = this;
        ctrl.movieService = MovieService;

        ctrl.$onInit = function() {
            ctrl.movieService.getMovies(this.type)
                .then((response) => {
                    this.moviesPath = response;
                })
                .catch((response) => {
                    ctrl.code = response.data.status_code;
                    if (ctrl.code === 7) {
                        ctrl.message = 'Error: you are not authenticated.';
                    } else {
                        ctrl.message = "Something went wrong, reload the page and try again"
                    }
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