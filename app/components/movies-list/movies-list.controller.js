angular
    .module('list', [])
    .component('list', {
        templateUrl: 'components/movies-list/movies-list.view.html',
        bindings: { type: '@', title: '@' },
        controller: function MoviesController(MovieService) {
            this.$onInit = function() {
                MovieService.getMovies(this.type)
                    .then((response) => this.movies = response);

            }
        }

    })