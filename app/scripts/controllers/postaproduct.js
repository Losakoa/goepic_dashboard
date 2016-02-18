

/**
 * @ngdoc function
 * @name goepicDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the goepicDashboardApp
 */






 angular.module('goepicDashboardApp', ['ui.router'])
 	.config(function ($stateProvider, $urlRouterProvider) {

 		$urlRouterProvider.otherwise('/');

 		$stateProvider
 		.state('home', {
	 		url: '/',
	 		templateUrl:'views/postaproduct.html',
	 		// use the controller here instead of in our html
	 		// using ng-controller='blah as blah'
	 		controller: 'postaproductController as postProduct',
	 	})
	 	.state('metrics', {
	 		url:'/metrics',
	 		template: '<h1>metrics stuff</h1>'
	 	})
	 	.state('inventory', {
	 		url:'/inventory',
	 		template: '<h1>Inventory stuff</h1>'
	 	})
	 	.state('orders', {
	 		url:'/orders',
	 		template: '<h1>Orders stuff</h1>'
	 	})
	 	.state('chat', {
	 		url:'/chat',
	 		template: '<h1>Chat stuff</h1>'
	 	})
	 	.state('resources', {
	 		url:'/resources',
	 		template: '<h1>Resources stuff</h1>'
	 	})
	 })
 	


 	// This is a controller for the post a product html page
 	.controller('postaproductController', function($scope) {


		// this provides the ability to do controllerAs in the html code.  So instead of using $scope.blah we use productList.blah to call stuff
		var postProduct = this;

		postProduct.titleList = [
		{
			productPhotos: 'placehodler for photos',
			productTitle: 'Snowboard', 
			productDesc: "This is a test description", 
			productPrice: 100,
			productSalePrice: 0,
			productShippingType: 'Fedex',
			productSize: 'Large',
			productInventory: 23

		},
		{
			productPhotos: 'placehodler for photos',
			productTitle: 'Longboard', 
			productDesc: "This is a test description for longboard", 
			productPrice: 200,
			productSalePrice: 0,
			productShippingType: 'Fedex',
			productSize: 'Large',
			productInventory: 23
		}
		];
		// this function allows you to use the push method to add names to this list
		postProduct.addProductToInventory = function() {
			//we're using the controllerAs to reference everything now instead of #scope
			postProduct.titleList.push({ 
				productPhotos: 'placehodler for photos',
				productTitle: postProduct.productTitle, 
				productDesc: postProduct.productDesc,
				productPrice: postProduct.productPrice,
				productSalePrice: postProduct.productSalePrice,
				productShippingType: postProduct.productShippingType,
				productSize: postProduct.productSize,
				productInventory: postProduct.productInventory,

			});
			// clears our the variables after we push them to the list
			postProduct.productTitle= "";
			postProduct.productDesc= "";
			postProduct.productPrice= "";
			postProduct.productSalePrice= "";
			postProduct.productShippingType="";
			postProduct.productSize="";
			postProduct.productInventory="";
		};


	});