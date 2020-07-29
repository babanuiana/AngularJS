class ListController {
    constructor(MovieService) {
        this.movieService = MovieService;
    }

    $onInit() {
        this.movieService.getMovies(this.type)
            .then((response) => this.movies = response);
    }
}

angular
    .module('list', [])
    .component('list', {
        templateUrl: 'components/moviesList/moviesList.view.html',
        bindings: { type: '@', title: '@' },
        controller: ListController

    })