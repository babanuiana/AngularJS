(function() {
    angular
        .module('inputForm', [])
        .component('inputForm', {
            templateUrl: 'components/input/input.view.html',
            bindings: { label: '@', title: '@', data: '=' },
            controllerAs: 'vm',
        })
})()