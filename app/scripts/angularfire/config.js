angular.module('firebase.config', [])
  .constant('FBURL', 'https://sekp-guide.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous'])

  .constant('loginRedirectPath', '/login');
