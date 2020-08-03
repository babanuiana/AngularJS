(function() {
    function InputController() {
        const ctrl = this;
        this.user = {};
        console.log(this.name);
    }
    angular
        .module('inputForm', [])
        .component('inputForm', {
            templateUrl: 'components/input/input.view.html',
            bindings: { label: '@', title: '@' },
            controller: InputController

        })
})()