angular
    .module('loginPage', ['ngRoute'])
    .component('loginPage', {
        templateUrl: 'components/testPage/test.view.html',
        controller: () => {}

    })
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/login', {
            templateUrl: 'components/testPage/test.view.html',
        });
    }])