(function() {
    angular
        .module('moviesApp', [
            'services.auth',
            'services.favourites',
            'services.login',
            'services.movies',
            'ngRoute',
            'list',
            'inputForm',
            'moviesPage',
            'loginPage',
            'favouritesList',
        ])
})()