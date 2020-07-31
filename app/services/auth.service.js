(function() {
    angular
        .module('moviesApp')
        .service('AuthService', function() {

            this.isAuth = () => {
                const sessionId = localStorage.getItem('sessionId');

                if (sessionId !== null) {
                    return true;
                } else return false;
            }
        })
})()