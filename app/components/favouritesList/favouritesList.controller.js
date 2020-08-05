(function() {
    function ListController(FavouritesService) {
        var vm = this;
        vm.data = {};
        vm.favouritesService = FavouritesService;

        this.submit = function() {

            if (vm.data.name && vm.data.description) {
                vm.favouritesService.createList(vm.data.name, vm.data.description)
                    .then((response) => {
                        localStorage.setItem("list", response);
                        alert("Your list has been created!");
                    });
            } else {
                alert("Fields are required!");
            }

        }
    }
    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", ListController)
})()