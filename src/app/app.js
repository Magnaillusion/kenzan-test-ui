angular
  .module('app')
  .component('app', {
    templateUrl: 'app/app.html',
    controller: 'AppController as vm'
  })
  .constant('RESOURCE', {
    API_URL: 'http://localhost:8080/'
  });
