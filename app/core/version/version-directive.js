'use strict';

angular.module('moviesApp.version.version-directive', [])

.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
        elm.text(version);
    };
}]);