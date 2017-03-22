angular.module('app').controller('AppController', AppController);

function AppController($log, AppService) {
  var vm = this;
  vm.createCustomer = createCustomer;
  vm.deleteCustomer = deleteCustomer;
  vm.updateCustomer = updateCustomer;

  vm.cl = [];

  getCustomers();

  function initArray(customers) {
    customers.forEach(function (customer) {
      vm.cl[customer.id] = true;
    });
  }

  function getCustomers() {
    AppService.getCustomers()
      .then(function (response) {
        initArray(response.data);
        vm.customers = response.data;
        $log.debug(vm.cl);
      });
  }

  function createCustomer() {
    AppService.createCustomer(vm.newCustomer)
      .then(function (response) {
        getCustomers();
        $log.debug(response);
      })
      .catch(function (error) {
        $log.debug(error);
      });
  }

  function deleteCustomer(customer) {
    AppService.deleteCustomer(customer)
      .then(function (response) {
        getCustomers();
        $log.debug(response);
      })
      .catch(function (error) {
        $log.debug(error);
      });
  }

  function updateCustomer(customer) {
    AppService.updateCustomer(customer)
      .then(function (response) {
        getCustomers();
        $log.debug(response);
      })
      .catch(function (error) {
        $log.debug(error);
      });

    vm.cl[customer.id] = true;
  }
}
