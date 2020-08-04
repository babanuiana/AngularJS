(function() {
    angular
        .module('services.auth', [])
        .service('AuthService', function() {
            this.isAuth = () => {
                const sessionId = localStorage.getItem('sessionId');
                if (sessionId !== null) {
                    return true;
                } else return false;
            }
        })
})()