(function() {
    function FavouritesCtrl(FavouritesService) {
        var ctrl = this;
        ctrl.data = {};
        ctrl.favouritesService = FavouritesService;
        ctrl.disabled = true;

        ctrl.onChange = function() {
            if (ctrl.data.name && ctrl.data.description) {
                ctrl.disabled = false;
            } else {
                ctrl.disabled = true;
            }
        }
        ctrl.submit = function() {
            if (ctrl.data.name && ctrl.data.description) {

                ctrl.favouritesService.createList(ctrl.data.name, ctrl.data.description)
                    .then((response) => {
                        localStorage.setItem("listId", response);
                        ctrl.message = 'Your list has been created!';
                    })
                    .catch((response) => {
                        ctrl.code = response.data.status_code;
                        if (ctrl.code === 3) {
                            ctrl.message = 'Error: you are not authenticated.';
                        } else {
                            ctrl.message = "Something went wrong, reload the page and try again"
                        }
                    })
            } else { return null }
        }
    }
    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", FavouritesCtrl)
        .component('favouritesList', {
            templateUrl: 'components/favouritesList/favouritesList.view.html',
            controller: 'FavouritesCtrl'
        })
})()