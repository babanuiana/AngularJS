(function() {
    angular
        .module('services.login', [])
        .service('LoginService', function($http) {
            this.getToken = () => {
                return $http
                    .get(GET_TOKEN)
                    .then((response) => response.data.request_token)
            }
            this.createSession = (token) => {
                const requestBody = { "request_token": token };
                return $http
                    .post(GET_SESSION, requestBody)
                    .then((response) => {
                        return response.data.session_id;
                    })
            }
        })
})()