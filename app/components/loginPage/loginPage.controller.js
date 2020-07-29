class LoginController {
    constructor(AuthService, $location) {
        this.authService = AuthService;
    }

    auth() {
        this.authService.getToken()
            .then((response) => {
                window.location.assign(`https://www.themoviedb.org/authenticate/${response}?redirect_to=http://localhost:8000/#!/login`);
            })
    }

    $onInit() {

        const url = window.location.href;
        const regToken = /request_token=(.*)&approved=true/;
        const newToken = url.match(regToken);

        if (newToken) {
            console.log('extract token', newToken[1]);

            this.authService.createSession(newToken[1])
                .then((res) => {
                    console.log(res)
                    return res;
                })
        }

    }
}

angular
    .module('login', [])
    .component('login', {
        templateUrl: 'components/loginPage/loginPage.view.html',
        controller: LoginController

    })