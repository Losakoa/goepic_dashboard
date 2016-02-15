'use strict';


/**
 * @ngdoc overview
 * @name goepicDashboardApp
 * @description
 * # goepicDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('goepicDashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/postaproduct.html',
        controller: 'postaproductController',
        controllerAs: 'postProduct'
      })
      .when('/metrics', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
