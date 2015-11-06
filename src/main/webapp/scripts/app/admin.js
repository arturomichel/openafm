/**
 * 
 */
(function () {
        'use strict';

	var app = angular.module('openafm', ['ngRoute', 'ngAnimate','ui.bootstrap','ngResource'])
	.config(['$routeProvider', '$locationProvider',
	  function($routeProvider, $locationProvider) {
		
		$locationProvider.html5Mode({ enabled: true, requireBase: true});
		
	    $routeProvider
	      /*.when('/slide/:slide', {
	        templateUrl: 'slide.html',
	        controller: 'SlideCtrl',
	        controllerAs: 'slides'
	      })*/
	      .otherwise({redirectTo: '/'});
	
	    $locationProvider.html5Mode(true);
	}]);
	
	app.controller("partController", ['$window', '$log', '$scope', 'InfoService', function($window, $log, $scope, InfoService) {
		
		$scope.part = {};
		$scope.parts = InfoService.find();
		$scope.alert = undefined;
		
		$scope.select = function(part) {
			$scope.part = part;
			
		}
		
		$scope.add = function() {
			InfoService.save($scope.part);
			$scope.parts = InfoService.find();
		}
		
		$scope.update = function() {
			InfoService.update($scope.part);
			$scope.parts = InfoService.find();
		}
		
		$scope.ack = function() {
			
		}
	}]);
	
	

})();