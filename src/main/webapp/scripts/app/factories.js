(function () {
	'use strict';

	var app = angular.module('openafm');

	app.factory('InfoService',['$resource', function($resource) {
		return $resource('/api/info/get/:id', { id: '@id' }, {
			save : {method: 'POST', url:'/api/info/save', isArray:false},
			update : {method: 'PUT', url:'/api/info/update', isArray:false},
			find : {method: 'GET', url:'/api/info/find', isArray:true}
		});
	}]);

	app.constant('MAP', {
		photodiode: ['1-0', '2-0', '1-1', '2-1'],
		mirror_out: ['3-4','3-5','2-5','2-4'],
		mirror_in: ['0-5', '0-6', '1-5'],
		laser: ['1-8', '1-9', '1-10', '2-8', '2-9', '2-10', '2-11'],
		cantilever: ['7-5', '7-6', '7-7', '7-8', '7-9', '7-10', '6-10'],
		sample: ['8-4', '8-5', '8-6', '8-7'],
		stage: ['8-3', '8-8', '9-3', '9-4', '9-5', '9-6', '9-7', '9-8', 
		        '10-3', '10-4','10-5','10-6','10-7',
		        '11-3', '11-4','11-5','11-6','11-7']
	});



	app.service('InfoPopup', ['$uibModal', '$log', function ($uibModal, $log) {

		var scope = this;

		scope.animationsEnabled = true;

		this.openPanel = function (size, id) {
			var modalInstance = $uibModal.open({
				animation: scope.animationsEnabled,
				templateUrl: 'infopopup.html',
				controller: 'InfoCtrl',
				size: size,
				resolve: {
					id: function () {
						//passed as game to the controller as 'game'
						return id;
					}
				}
			});

			modalInstance.result.then(function (game) {
				$log.info("info: " + game);
			}, function () {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};
	}]);

})();