angular.module('fms.controllers', [])

.controller('CaseCtrl', function($scope, $state, $window, $stateParams, 
		CaseService, $cordovaDialogs, $cordovaCamera) {
	
	 
	$scope.newcase = {};
	
	$scope.attachPicture = function() {
		console.log("attachPicture");
		
		var options = {
	      quality: 100,
	      destinationType: Camera.DestinationType.DATA_URL,
	      sourceType: Camera.PictureSourceType.CAMERA,
	      allowEdit: false,
	      encodingType: Camera.EncodingType.JPEG,
	      targetWidth: 200,
	      targetHeight: 100,
	      popoverOptions: CameraPopoverOptions,
	      saveToPhotoAlbum: false,
	      correctOrientation:true
	    };
		
		$cordovaCamera.getPicture(options).then(function(imageData) {
			console.log("getpicture : " + imageData);
	        var image = document.getElementById('pic');
	        image.src = "data:image/jpeg;base64," + imageData;
	    }, function(err) {
	    	console.log("error error error ", exx);
	    });

	}
	
	$scope.submitCase = function() {
		console.log("submitCase");
		$cordovaDialogs.alert('You have just successfully sent one report to us. We will get back to you as soon as we can. Thank you.', 
			'Confirmation', 'Close')
			.then(function() {
				// callback success
	    });
	
	}
})

.controller('SettingCtrl', function($scope, $state, $window, $stateParams, CaseService, 
		$cordovaDialogs) {
	$scope.setting = {};
	$scope.setting.anonymous = true;
	$scope.setting.notification = true;
	$scope.setting.nric = 'S7962708I';
	$scope.setting.emailAddress= 'fkarnagi@gmail.com';
	
	$scope.saveSetting = function() {
		console.log("saveSetting");
		$cordovaDialogs.alert('Your setting has been successfully saved', 
			'Confirmation', 'Close')
			.then(function() {
				// callback success
	    });
	
	}
});
