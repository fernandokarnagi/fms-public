angular.module('fms.controllers', [])

.controller('CaseCtrl', function($scope, $state, $window, $stateParams, CaseService) {
	
})

.controller('SettingCtrl', function($scope, $state, $window, $stateParams, CaseService) {
	$scope.setting = {};
	$scope.setting.anonymous = true;
	$scope.setting.notification = true;
	$scope.setting.nric = 'S7962708I';
	$scope.setting.emailAddress= 'fkarnagi@gmail.com';
});
