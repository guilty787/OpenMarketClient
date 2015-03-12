'use strict';

/**
 * @ngdoc function
 * @name openMarketClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openMarketClientApp
 */
angular.module('openMarketClientApp')
  .controller('MainCtrl', function ($scope, ItemManager) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.info(ItemManager.getAllItems());
    console.info(ItemManager.getItemById(2));
  });
