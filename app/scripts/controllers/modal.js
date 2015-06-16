'use strict';

/**
 * @ngdoc function
 * @name sekpGuideApp.controller:ModalctrlCtrl
 * @description
 * # ModalctrlCtrl
 * Controller of the sekpGuideApp
 */
angular.module('sekpGuideApp')
  .controller('ModalCtrl', function ($scope, $modalInstance, institution) {
  	$scope.institution = institution;

    $scope.cancel = function () {
		$modalInstance.close();
		$('body').removeClass('modal-open');
		$('.modal-backdrop').toggle();
		$('.modal').toggle();
	};
  });
