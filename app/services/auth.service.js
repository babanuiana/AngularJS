(function() {
    angular
        .module('services.auth', [])
        .service('AuthService', function($q) {
            this.isAuth = () => {
                const sessionId = localStorage.getItem('sessionId');
                if (sessionId !== null) {
                    return $q.resolve('Authenticated');
                } else {
                    return $q.reject('Not Authenticated');
                }
            }
        })
})()