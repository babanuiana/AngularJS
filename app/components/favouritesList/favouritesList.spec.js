'use strict';

describe('favouritesList module', function() {
    let $httpBackend, $rootScope;

    beforeEach(module('services.favourites'));
    beforeEach(module('favouritesList'));

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe('FavouritesList controller', function() {
        const SUCCES_RESPONSE = {
            "status_message": "The item/record was created successfully.",
            "success": true,
            "status_code": 1,
            "list_id": 5861
        };
        const ERROR_RESPONSE = {
            "status_code": 7,
            "status_message": "Invalid API key: You must be granted a valid key.",
            "success": false
        }

        it('should show validation error', inject(function($controller) {
            const ctrl = $controller('FavouritesCtrl', { $scope: $rootScope });
            ctrl.submit();
            expect(ctrl.submitEnabled).toBeFalsy();
        }));

        it('should create list', inject(function($controller) {
            localStorage.setItem('sessionId', 'test-session-id');
            const CREATE_LIST = 'https://api.themoviedb.org/3/list?api_key=fc298428bb77d2a10fb5e0bc411eb836&session_id=test-session-id';
            $httpBackend.whenPOST(CREATE_LIST).respond(SUCCES_RESPONSE);

            const ctrl = $controller('FavouritesCtrl', { $scope: $rootScope });
            ctrl.data = {
                name: 'test name',
                description: 'test description'
            }
            ctrl.submit();
            $httpBackend.flush();
            expect(ctrl.message).toBe('Your list has been created!');
        }));

        it('should handle create list error', inject(function($controller) {
            localStorage.setItem('sessionId', 'test-session-id');
            const CREATE_LIST = 'https://api.themoviedb.org/3/list?api_key=fc298428bb77d2a10fb5e0bc411eb836&session_id=test-session-id';
            $httpBackend.whenPOST(CREATE_LIST).respond(ERROR_RESPONSE);

            const ctrl = $controller('FavouritesCtrl', { $scope: $rootScope });
            ctrl.data = {
                name: 'test name',
                description: 'test description'

            }
            ctrl.submit();
            $httpBackend.flush();
            expect(ctrl.message).toBe('Error: check the name and description field!');
        }));

    });
});