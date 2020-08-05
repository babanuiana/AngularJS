(function() {
    function LoginCtrl(LoginService, $location) {
        const ctrl = this;
        ctrl.loginService = LoginService;

        ctrl.extractToken = function() {
            const url = $location.absUrl();
            const regToken = /request_token=(.*)&approved=true/;
            const newToken = url.match(regToken);
            if (newToken !== null) {
                return newToken[1]
            } else { return null }
        }

        ctrl.auth = function() {
            ctrl.loginService.getToken()
                .then((response) => {
                    window.location.assign(`https://www.themoviedb.org/authenticate/${response}?redirect_to=http://localhost:8000/`);
                })
        }

        const newToken = ctrl.extractToken();

        if (newToken) {
            ctrl.loginService.createSession(newToken)
                .then(() => {
                    $location.url('/movies').replace();
                })
        }
    }
    angular
        .module('loginPage', ['ngRoute'])
        .controller("LoginCtrl", LoginCtrl)
})()