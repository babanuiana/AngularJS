'use strict';

describe('Login service', function() {
    let $httpBackend, $rootScope;

    beforeEach(module('services.login'));
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get("$httpBackend");
        $rootScope = $injector.get("$rootScope");
    }));
    const TOKEN_SUCCESS = {
        "success": true,
        "expires_at": "2016-08-26 17:04:39 UTC",
        "request_token": "ff5c7eeb5a8870efe3cd7fc5c282cffd26800ecd"
    }
    const SESSION_SUCCESS = {
        "success": true,
        "session_id": "79191836ddaa0da3df76a5ffef6f07ad6ab0c641"
    }
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    describe('LoginService', function() {
        it('should get token', inject(function(LoginService) {
            let token;
            const REQUEST_TOKEN = `https://api.themoviedb.org/3/authentication/token/new?api_key=fc298428bb77d2a10fb5e0bc411eb836`;

            $httpBackend.whenGET(REQUEST_TOKEN).respond(TOKEN_SUCCESS);
            LoginService.getToken().then((response) => {
                token = response;
            });

            $httpBackend.flush();
            expect(token).toBe(TOKEN_SUCCESS.request_token);
        }));
        it('should create session', inject(function(LoginService) {
            let session;
            const TOKEN = 'ff5c7eeb5a8870efe3cd7fc5c282cffd26800ecd'
            const REQUEST_BODY = { "request_token": TOKEN };
            const CREATE_SESSION = `https://api.themoviedb.org/3/authentication/session/new?api_key=fc298428bb77d2a10fb5e0bc411eb836`;

            $httpBackend.whenPOST(CREATE_SESSION, REQUEST_BODY).respond(SESSION_SUCCESS);
            LoginService.createSession(TOKEN).then((response) => {
                session = response;
            });

            $httpBackend.flush();
            expect(session).toBe(SESSION_SUCCESS.session_id);
        }));
    });
});