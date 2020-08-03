(function() {
    angular
        .module('moviesApp')
        .service('LoginService', function($http) {
            const TOKEN = 'https://api.themoviedb.org/3/authentication/token/new?api_key=fc298428bb77d2a10fb5e0bc411eb836';
            const SESSION = 'https://api.themoviedb.org/3/authentication/session/new?api_key=fc298428bb77d2a10fb5e0bc411eb836';
            this.getToken = () => {
                return $http
                    .get(TOKEN)
                    .then((response) => response.data.request_token)
                    .catch((response) => alert('Error:', response.status))
            }
            this.createSession = (token) => {
                const requestToken = { "request_token": token };
                return $http
                    .post(SESSION, requestToken)
                    .then((response) => {
                        localStorage.setItem('sessionId', response.data.session_id);;
                    })
                    .catch((response) => alert('Error:', response.status))
            }
        })
})()