'use strict';

// Declare app level module which depends on views, and components
angular.module('App', [
"ui.router",
"ngRoute"

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

 
}]);
