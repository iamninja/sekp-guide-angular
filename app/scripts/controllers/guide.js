'use strict';

/**
 * @ngdoc function
 * @name sekpGuideApp.controller:GuideCtrl
 * @description
 * # GuideCtrl
 * Controller of the sekpGuideApp
 */
angular.module('sekpGuideApp')
  .controller('GuideCtrl', function ($scope, Ref, $firebaseArray, $animate, $modal) {
    $scope.institutions = $firebaseArray(Ref.child('institutions'));

    // Enable animations
     // $scope.animationsEnabled = true;

    function removeAccents(value) {
        return value
            .replace(/ά/g, 'α')
            .replace(/έ/g, 'ε')
            .replace(/ί/g, 'ι')
            .replace(/ή/g, 'η')
            .replace(/ό/g, 'ο')
            .replace(/ώ/g, 'ω')
            .replace(/ύ/g, 'υ')
            .replace(/ς/g, 'σ');
    }

    $scope.ignoreAccents = function(institution) {
        if (!$scope.query) {
        	return true;
        }

        var fullText = institution.name + ' ' + institution.short + ' ' + institution.status + ' ' + institution.description + ' ' + institution.powers + ' ' + institution.areas + ' ' + institution.category.name + ' ' + institution.year + ' ' + institution.website;
        var text = removeAccents(fullText.toLowerCase());
        var query = removeAccents($scope.query.toLowerCase());
        return text.indexOf(query) > -1;
    };

    // Modal
    $scope.openModal = function (institution) {

		var modalInstance = $modal.open({
			animation: true,
			size: 'lg',
			templateUrl: 'modalContent.html',
			controller: 'ModalCtrl',
			resolve: {
				institution: function () {
					return institution;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {

		}, function () {
			// console.log('Modal dismissed at: ' + new Date());
		});
	};


  });
