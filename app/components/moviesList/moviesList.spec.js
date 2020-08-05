'use strict';

describe('favouritesList module', function() {
    let $httpBackend, $rootScope;

    beforeEach(module('services.movies'));
    beforeEach(module('list'));

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get('$rootScope');
    }));

    describe('movies list controller', function() {
        it('should show validation error', inject(function($controller) {
            const ctrl = $controller('ListController', { $scope: $rootScope });
            expect(ctrl.submitEnabled).toBeFalsy();
        }));

    });
});