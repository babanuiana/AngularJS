angular
    .module('moviesPage', ['ngRoute'])
    .component('moviesPage', {
        templateUrl: 'components/movies-page/movies-page.view.html',
        controller: () => {}

    })
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            templateUrl: 'components/movies-page/movies-page.view.html',
        });
    }])