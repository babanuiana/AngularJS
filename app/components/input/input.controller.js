(function() {
    function InputController() {
        const ctrl = this;
        this.user = {};
    }
    angular
        .module('inputForm', [])
        .component('inputForm', {
            templateUrl: 'components/input/input.view.html',
            bindings: { label: '@', title: '@' },
            controller: InputController

        })
})()