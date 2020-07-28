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
        templateUrl: 'components/movies-list/movies-list.view.html',
        bindings: { type: '@', title: '@' },
        controller: ListController

    })