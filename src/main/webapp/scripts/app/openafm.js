/**
 * 
 */
(function () {
        'use strict';

	var app = angular.module('openafm', ['ngRoute', 'ngAnimate'])
	.config(['$routeProvider', '$locationProvider',
	  function($routeProvider, $locationProvider) {
		
		$locationProvider.html5Mode({ enabled: true, requireBase: true});
		
	    $routeProvider
	      .when('/slide/:slide', {
	        templateUrl: 'slide.html',
	        controller: 'SlideCtrl',
	        controllerAs: 'slides'
	      })
	      .otherwise({redirectTo: '/'});
	
	    $locationProvider.html5Mode(true);
	}]);
	
	app.controller("MainCtrl", ['$window', '$log', '$scope', function($window, $log, $scope) {
		$scope.rows = new Array();
		$scope.rowHeight = Math.floor($window.innerHeight / 12);
		for	(var i = 0; i < 12; i++){//Math.floor($window.innerHeight / 15); i++) {
		    $scope.rows.push(i);
		} 

		$log.info("rows: " + $scope.rows);
		
		$scope.cols = new Array();
		$scope.colHeight = Math.floor($window.innerWidth / 12);
		for	(var i = 0; i < 12; i++){ //Math.floor($window.innerWidth / 20); i++) {
		    $scope.cols.push(i);
		}

		$log.info("cols: " + $scope.cols);
		
	}]);
	
	app.directive('row', function ($window) {
	    return {
	        restrict: 'A',
	        link: function (scope, elem, attrs) {
	            var rowHeight =  Math.floor($window.innerHeight / 12);
	            elem.css('height', rowHeight + 'px');
	        }
	    };
	});
	
	app.directive('col', function ($window) {
	    return {
	        restrict: 'A',
	        link: function (scope, elem, attrs) {
	            var colWidth =  Math.floor(($window.innerWidth - 30) / 12);
	            var rowHeight =  Math.floor($window.innerHeight / 12);
	            elem.css('width', colWidth + 'px');
	            elem.css('height', rowHeight + 'px');
	        }
	    };
	});
	
	app.controller("SlideCtrl", ['$window', '$log', function($window) {
		var height = $window.innerHeight;
	}]);

})();