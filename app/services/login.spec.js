'use strict';

describe('Login module', function() {
    let $httpBackend, $rootScope;

    beforeEach(module('services.login'));
    beforeEach(function() {
        const mock = {
            set: jasmine.createSpy(),
            get: jasmine.createSpy(),
        };

        module(function($provide) {
            $provide.value('window', mock);
        });

        inject(function($injector) {
            // notify = $injector.get('notify');
        });
    });

    describe('LoginService', function() {
        it('should get token', inject(function(LoginService) {
            const result = LoginService.getToken();
            expect(result).toBeDefined();
        }));

    });
});