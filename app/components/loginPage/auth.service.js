angular
    .module('login')
    .service('AuthService', function($window, $http) {

        this.getToken = () => {
            return $http
                .get(`https://api.themoviedb.org/3/authentication/token/new?api_key=fc298428bb77d2a10fb5e0bc411eb836`)
                .then((response) => {
                    return response.data.request_token;
                })
        }

        this.createSession = (token) => {
            requestToken = { "request_token": token };

            return $http
                .post(`https://api.themoviedb.org/3/authentication/session/new?api_key=fc298428bb77d2a10fb5e0bc411eb836`, requestToken)
                .then((response) => {
                    return response;
                })
        }

    })