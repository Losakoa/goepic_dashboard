'use strict';
angular.module('testApp', ['ui.bootstrap']);

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
        controller: 'MainCtrl',
        controllerAs: 'Main'
      })
      .when('/metrics', {
        templateUrl: 'views/metrics.html',
        controller: 'MetricsCtrl',
        controllerAs: 'metrics'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
