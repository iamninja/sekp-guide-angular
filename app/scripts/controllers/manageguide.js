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

    $scope.alerts = [];
    $scope.newInstitution = {};
    $scope.toEditInstitution = null;
    $scope.toDeleteInstitution = null;
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

    $scope.saveInstitution = function(newInstitution) {
     //    console.log(newInstitution);
    	// if (isEmpty(newInstitution)) {
     //        $scope.alerts.push({type: 'danger', msg: 'Cannot add empty institution.'});
    	// 	return;
    	// } else if (!true) {
     //        $scope.alerts.push({type: 'danger', msg: 'Cannot add institution with empty name.'});
     //        return;
     //    }

    	$scope.institutions.$add($scope.newInstitution)
    		.then(function(ref) {
    			var id = ref.key();
    			console.log('Added with id: ' + id);
    			$scope.institutions.$indexFor(id);
    			$scope.newInstitution = {};
                $scope.alerts.push({type: 'success', msg: 'New institution added.'});
    		});
    };

    $scope.saveEditedInstitution = function(toEditInstitution) {
        var index = $scope.institutions.$indexFor(toEditInstitution.$id);
        $scope.institutions[index] = toEditInstitution;
        $scope.institutions.$save(index)
            .then(function(ref) {
                $scope.alerts.push({type: 'success', msg: 'Institution updated.'});
                console.log('Updated entry: ' + ref + ' (id: ' + ref.key() + ')');
            });

        // console.log(toEditInstitution);
        // console.log($scope.institutions.$indexFor(toEditInstitution.$id));
        // console.log($scope.institutions);

    };

    $scope.deleteInstitution = function(toDeleteInstitution) {
        if (confirm('Are you sure you want to delete, ' + toDeleteInstitution.name)) {
            $scope.institutions.$remove(toDeleteInstitution)
                .then(function(ref) {
                    $scope.alerts.push({type: 'warning', msg: 'Institution deleted.'});
                });
        }
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

  });
