(function() {
    function ListController(FavouritesService) {

        var vm = this;
        vm.data = {};
        console.log(vm.data);
        this.onStatusChange = function(data) {
            vm.mandatoryFilesIncluded = data;
        };
        this.submit = function(data) {
            console.log(vm.data);

        }
    }

    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", ListController)
})()