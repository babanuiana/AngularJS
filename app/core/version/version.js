'use strict';

angular.module('moviesApp.version', [
    'moviesApp.version.interpolate-filter',
    'moviesApp.version.version-directive'
])

.value('version', '0.1');