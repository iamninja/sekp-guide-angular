'use strict';

/**
 * @ngdoc function
 * @name sekpGuideApp.controller:ManageguideCtrl
 * @description
 * # ManageguideCtrl
 * Controller of the sekpGuideApp
 */
angular.module('sekpGuideApp')
  .controller('ManageguideCtrl', function ($scope, Auth, Ref, $firebaseArray, $window) {

    $scope.viewEdit = false;
    $scope.newInstitution = {};
    $scope.editInstitution = null;
    $scope.categories = [{ id: 1, name: 'Κοινωνική Ασφάλιση' },
    					 { id: 2, name: 'Κοινωνική Πρόνοια' },
    					 { id: 3, name: 'Πολιτική Υγείας' },
    					 { id: 4, name: 'Πολιτική Απασχόλισης' },
    					 { id: 5, name: 'Εκπαιδευτική Πολιτική' },
    					 { id: 6, name: 'Αντεγκληματική Πολιτική' },
    					 { id: 7, name: 'Μεταναστευτική Πολιτική' },
    					 { id: 8, name: 'Πολιτική Φύλου' },
    					 { id: 9, name: 'Στεγαστική Πολιτική' },
    					 { id: 10, name: 'Πολιτική Περιβάλλοντος' },
    					 { id: 11, name: 'Κοινωνική Έρευνα' }];

    $scope.institutions = $firebaseArray(Ref.child('institutions'));

    $scope.saveInstitution = function() {
    	if (!$scope.newInstitution) {
    		return;
    	}

    	$scope.institutions.$add($scope.newInstitution)
    		.then(function(ref) {
    			var id = ref.key();
    			console.log('Added with id: ' + id);
    			$scope.institutions.$indexFor(id);
    			$scope.newInstitution = {};
    		});
    };

    $scope.saveEditedInstitution = function() {

    };

    $scope.deleteInstitution = function() {

    };

  });
