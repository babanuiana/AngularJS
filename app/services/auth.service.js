(function() {
    angular
        .module('services.auth', [])
        .service('AuthService', function($q) {
            this.isAuth = () => {
                const sessionId = localStorage.getItem('sessionId');

                if (sessionId !== null) {
                    //If authenticated, return anything you want, probably a user object
                    return $q.resolve('Authenticated');
                } else {
                    //Else send a rejection
                    return $q.reject('Not Authenticated');
                }
            }
        })
})()