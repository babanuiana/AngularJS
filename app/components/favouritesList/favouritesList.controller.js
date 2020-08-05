(function() {
    function ListController(FavouritesService) {
        var vm = this;
        vm.data = {};
        vm.favouritesService = FavouritesService;
        vm.submitEnabled = false;

        this.change = function() {
            if (vm.data.name && vm.data.description) {
                vm.submitEnabled = true;

            } else {
                vm.submitEnabled = false;

            }
        }
        this.submit = function() {
            if (vm.data.name && vm.data.description) {
                vm.submitEnabled = true;

                vm.favouritesService.createList(vm.data.name, vm.data.description)
                    .then((response) => {
                        localStorage.setItem("list", response);
                        vm.message = 'Your list has been created!';
                    })
                    .catch((response) => {
                        const code = response.data.status_code;
                        if (code === 401) {
                            vm.message = 'Error: check the name and description field!';
                        } else if (code === 404) {
                            vm.message = "Error: server not found"
                        } else {
                            vm.message = "Error, reload the page and try again"
                        }

                    })
            } else {
                vm.submitEnabled = false;
                vm.message = 'Error: check the name and description field!';
            }
        }
    }
    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", ListController)
})()