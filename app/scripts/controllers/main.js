'use strict';

/**
 * @ngdoc function
 * @name openMarketClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the openMarketClientApp
 */
angular.module('openMarketClientApp')
  .controller('MainCtrl', function ($scope, ItemManager, Graph) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.info("algorithm start");
    var item = ItemManager.getItemById(41, false);

    Graph.initializeItem(item);

    console.info(item);
  });
