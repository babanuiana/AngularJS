(function() {
    class LoginController {
        constructor(LoginService) {
            this.loginService = LoginService;
        }
        extractToken() {
            const url = window.location.href;
            const regToken = /request_token=(.*)&approved=true/;
            const newToken = url.match(regToken);
            if (newToken !== null) return newToken[1]
        }
        auth() {
            this.loginService.getToken()
                .then((response) => {
                    window.location.assign(`https://www.themoviedb.org/authenticate/${response}?redirect_to=http://localhost:8000/#!/movies`);
                })
        }
        $onInit() {
            const newToken = this.extractToken();

            if (newToken) {
                this.loginService.createSession(newToken)
                    .then((response) => {
                        localStorage.setItem('sessionId', response);
                        window.location.assign('/#!/movies');
                    })
            }
        }
    }
    angular
        .module('login', [])
        .component('login', {
            templateUrl: 'components/loginComponent/loginComponent.view.html',
            controller: LoginController,
            controllerAs: 'login'
        })
})()