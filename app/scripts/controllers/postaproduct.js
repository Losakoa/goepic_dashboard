'use strict';

/**
 * @ngdoc function
 * @name goepicDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goepicDashboardApp
 */
angular.module('goepicDashboardApp', [])
	.controller('postaproductController', function($scope) {
		$scope.list = [
		{name: 'john', age:37},
		{name: 'bill', age:22},
		{name: 'carlos', age:29}
		]
	});