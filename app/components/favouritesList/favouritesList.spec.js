'use strict';

describe('favouritesList module', function () {

  beforeEach(function () {
    module('services.favourites');
    module('favouritesList');
  });

  describe('FavouritesList controller', function () {

    it('should ....', inject(function ($controller) {
      var $scope = {};
      var view1Ctrl = $controller('FavouritesCtrl', { $scope: $scope });
      expect(view1Ctrl).toBeDefined();
    }));
  });
});