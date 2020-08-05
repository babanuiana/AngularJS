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
                        vm.message = 'Your list has been created!';
                    })
                    .catch((response) => {
                        vm.message = response.data.status_message;
                        // throw new Error(response.data.status_message);
                    })
            } else {
                vm.submitEnabled = false;
                //alert("Fields are required!");
            }
        }
    }

    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", ListController)
})()