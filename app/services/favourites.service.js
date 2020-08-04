(function() {
    angular
        .module('services.favourites', [])
        .service('FavouritesService', function($http) {
            const LIST = 'https://api.themoviedb.org/3/list?api_key=fc298428bb77d2a10fb5e0bc411eb836';
            this.createList = () => {
                const movie = {
                    "name": "This is my awesome test list.",
                    "description": "Just an awesome list dawg.",
                    "language": "en"
                };
                return $http
                    .post(LIST, movie)
                    .then((response) => {
                        console.log(response)
                    })
                    .catch((response) => alert('Error:', response.status))
            }
        })
})()