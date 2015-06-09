'use strict';

/**
 * @ngdoc function
 * @name sekpGuideApp.controller:ManageguideCtrl
 * @description
 * # ManageguideCtrl
 * Controller of the sekpGuideApp
 */
angular.module('sekpGuideApp')
  .controller('ManageguideCtrl', function ($scope, Auth, Ref, $firebaseArray) {
    $scope.institutions = $firebaseArray(Ref.child('institutions'));

    $scope.newInstitution = {};

    $scope.categories = [{ name: 'Κοινωνική Ασφάλιση', id: 1 },
    					 { name: 'Κοινωνική Πρόνοια', id: 2 },
    					 { name: 'Πολιτική Υγείας', id: 3 },
    					 { name: 'Πολιτική Απασχόλισης', id: 4 },
    					 { name: 'Εκπαιδευτική Πολιτική', id: 5},
    					 { name: 'Αντεγκληματική Πολιτική', id: 6},
    					 { name: 'Μεταναστευτική Πολιτική', id: 7},
    					 { name: 'Πολιτική Φύλου', id: 8},
    					 { name: 'Στεγαστική Πολιτική', id: 9},
    					 { name: 'Πολιτική Περιβάλλοντος', id: 10},
    					 { name: 'Κοινωνική Έρευνα', id: 11}];

    $scope.saveInstitution = function() {
    	if (!$scope.newInstitution) return;

    	$scope.institutions.$add($scope.newInstitution)
    		.then(function(ref) {
    			var id = ref.key();
    			console.log('Added with id: ' + id);
    			$scope.institutions.$indexFor(id);
    			$scope.newInstitution = {};
    		});
    };

  });
