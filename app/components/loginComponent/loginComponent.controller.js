class LoginController {
    constructor(LoginService) {
        this.loginService = LoginService;
    }

    auth() {
        this.loginService.getToken()
            .then((response) => {
                window.location.assign(`https://www.themoviedb.org/authenticate/${response}?redirect_to=http://localhost:8000/#!/login`);
            })
    }

    $onInit() {

        const url = window.location.href;
        const regToken = /request_token=(.*)&approved=true/;
        const newToken = url.match(regToken);

        if (newToken) {

            this.loginService.createSession(newToken[1])
                .then((response) => {
                    localStorage.setItem('sessionId', response);;
                })
        }

    }
}

angular
    .module('login', [])
    .component('login', {
        templateUrl: 'components/loginComponent/loginComponent.view.html',
        controller: LoginController,
        // controllerAs: 'auth'
    })