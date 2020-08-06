(function() {
    angular
        .module('services.favourites', [])
        .service('FavouritesService', function($http) {
            const sessionId = localStorage.getItem('sessionId');
            const CREATE_LIST = `https://api.themoviedb.org/3/list?api_key=fc298428bb77d2a10fb5e0bc411eb836&session_id=${sessionId}`;
            this.createList = (name, description) => {
                const requestBody = {
                    name: name,
                    description: description,
                    language: "en",
                };
                return $http
                    .post(CREATE_LIST, requestBody)
                    .then((response) => {
                        return response.data.list_id;
                    })
            }
        })
})()