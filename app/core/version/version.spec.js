'use strict';

describe('moviesApp.version module', function() {
    beforeEach(module('moviesApp.version'));

    describe('version service', function() {
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });
});