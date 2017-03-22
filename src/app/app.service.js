angular.module('app').service('AppService', AppService);

function AppService($http, RESOURCE) {
  this.getCustomers = getCustomers;
  this.getCustomer = getCustomer;
  this.createCustomer = createCustomer;
  this.updateCustomer = updateCustomer;
  this.deleteCustomer = deleteCustomer;

  function getCustomers() {
    var request = {
      method: 'GET',
      url: RESOURCE.API_URL + 'customers/',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return $http(request);
  }

  function getCustomer(id) {
    var request = {
      method: 'GET',
      url: RESOURCE.API_URL + 'customers/' + id,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return $http(request);
  }

  function createCustomer(customer) {
    var request = {
      method: 'POST',
      url: RESOURCE.API_URL + 'customers/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: customer
    };

    return $http(request);
  }

  function updateCustomer(customer) {
    var request = {
      method: 'POST',
      url: RESOURCE.API_URL + 'customers/' + customer.id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: customer
    };

    return $http(request);
  }

  function deleteCustomer(customer) {
    var request = {
      method: 'DELETE',
      url: RESOURCE.API_URL + 'customers/' + customer.id,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return $http(request);
  }
}
