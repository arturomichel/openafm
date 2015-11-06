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
	      .when('/slide/:slide', {
	        templateUrl: 'slide.html',
	        controller: 'SlideCtrl',
	        controllerAs: 'slides'
	      })
	      .otherwise({redirectTo: '/'});
	
	    $locationProvider.html5Mode(true);
	}]);
	
	app.controller("MainCtrl", ['$window', '$log', '$scope', 'MAP', 'InfoPopup', 'InfoService', function($window, $log, $scope, MAP, InfoPopup, InfoService) {
		var main = document.getElementById('main');
		var divw = main.clientWidth;
		var divH = 0.75 * divw;
		
		main.setAttribute("style","width:" + divw + "px !important;");
		main.setAttribute("style","height:"+divH+ 'px !important;');
		
		main.style.width=divw+'px';
		main.style.height=divH+'px';

		main.style.backgroundSize = divw+"px " + divH + "px";
	
		$scope.rows = new Array();
		$scope.rowHeight = Math.floor(document.innerHeight / 12);
		for	(var i = 0; i < 12; i++){//Math.floor($window.innerHeight / 15); i++) {
		    $scope.rows.push(i);
		} 
		
		$scope.cols = new Array();
		$scope.colHeight = Math.floor(document.innerWidth / 12);
		for	(var i = 0; i < 12; i++){ //Math.floor($window.innerWidth / 20); i++) {
		    $scope.cols.push(i);
		}

		$scope.showInfo = function(row, col) {
			InfoPopup.openPanel('lg', row + '-' + col);
		}
	}]);
	
	app.controller('InfoCtrl', ['$modalInstance', '$scope', '$log', 'MAP', 'InfoService', 'id', function($modalInstance, $scope, $log, MAP, InfoService, id) {
		
		$scope.part = {};
		
		if(MAP.photodiode.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'photodiode'});
		}else if(MAP.mirror_out.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'mirror_out'});
		}else if(MAP.mirror_in.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'mirror_in'});
		}else if(MAP.laser.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'laser'});
		}else if(MAP.sample.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'sample'});
		}else if(MAP.stage.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'stage'});
		}else if(MAP.cantilever.indexOf(id) != -1) {
			$scope.partInfo = InfoService.get({id:'catilever'});
		}
		
		$scope.partInfo.$promise.then(function(info) {
		      $scope.part = info;
		      $log.info("InfoCtrl " + $scope.part.name);
	    });
		
		$scope.ok = function () {
			$scope.part = {};
			$modalInstance.close();
		};
		
	}]);
	
	app.directive('row', function ($window) {
	    return {
	        restrict: 'A',
	        link: function (scope, elem, attrs) {
	            
	        }
	    };
	});
	
	app.directive('cell', function ($window) {
	    return {
	        restrict: 'A',
	        link: function (scope, elem, attrs) {
	        	var element = document.getElementById('main');
	            var colWidth =   parseInt(element.style.width, 10) / 12;
	            var rowHeight = parseInt(element.style.height, 10) / 12;
	            elem.css('width', colWidth + 'px');
	            elem.css('height', rowHeight + 'px');
	        }
	    };
	});
	
	app.controller("SlideCtrl", ['$window', '$log', function($window) {
		var height = $window.innerHeight;
	}]);

})();