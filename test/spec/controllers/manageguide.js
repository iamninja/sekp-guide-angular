'use strict';

describe('Controller: ManageguideCtrl', function () {

  // load the controller's module
  beforeEach(module('sekpGuideApp'));

  var ManageguideCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ManageguideCtrl = $controller('ManageguideCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
