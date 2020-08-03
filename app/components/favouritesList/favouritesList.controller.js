(function() {
    function ListController(FavouritesService) {
        const ctrl = this;
        ctrl.favouritesService = FavouritesService;

        ctrl.submit = function() {
            ctrl.favouritesService.createList()
                .then((response) => { console.log(response); })
        }
    }

    angular
        .module('favouritesList', ['ngRoute'])
        .controller("FavouritesCtrl", ListController)
})()