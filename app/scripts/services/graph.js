'use strict';

/**
 * @ngdoc service
 * @name openMarketClientApp.Graph
 * @description
 * # Graph
 * Service in the openMarketClientApp.
 */
angular.module('openMarketClientApp')
  .service('Graph', function (ItemManager) {

    /*
     {
     id: 32,
     name: "Amir Wind Reform Wedding",
     description: "",
     thumbnail: "",
     purchaseCost: 0.55,
     userId: 9,
     rating: 4.39,
     itemAddress: "",
     dependencies: [
     {
     itemId: 8,
     quantity: 1,
     price: 0,
     set: "design"
     },
     {
     itemId: 10,
     quantity: 1,
     price: 0,
     set: "design"
     }
     ]
     },
    */

    var sampleOptions = {
      priority: [ "price", "rating", "popularity"],
      vetoedUsers: [],
      favoriteUsers: [],
      vetoedItems: [],
      favoriteItems: []
    }

    var self = this;

    this.initializeItem = function(item) {
      self.assignExtremeValuesToItem(item, "purchaseCost", "minCost", true, false);
      self.assignExtremeValuesToItem(item, "rating", "bestAvgRating", false, true);
    }

    this.assignExtremeValuesToItem = function (rootItem, fieldName, extremeFieldName, isMin, useAverage) {

      if (rootItem.dependencies.length == 0) {
        rootItem[extremeFieldName] = rootItem[fieldName];
      }
      else {

        var sets = {};
        var dependency;
        var totalSets = 0;

        for (var i = 0; i < rootItem.dependencies.length; i++) {
          dependency = rootItem.dependencies[i];

          if (typeof sets[dependency.set] == 'undefined') {
            sets[dependency.set] = [];
            totalSets++;
          }

          sets[dependency.set].push(ItemManager.getItemById(dependency.itemId, false));
        }

        var result = rootItem[fieldName];

        for (var setListName in sets) {
          var setList = sets[setListName];
          var minMaxValue = -1;
          var value;

          for (var i = 0; i < setList.length; i++) {
            self.assignExtremeValuesToItem(setList[i], fieldName, extremeFieldName, isMin, useAverage);

            value = setList[i][extremeFieldName];

            if (minMaxValue == -1 || ((isMin && value < minMaxValue) || (!isMin && value > minMaxValue)))
              minMaxValue = value;
          }

          result += minMaxValue;
        }

        if (useAverage)
          result /= (totalSets + 1);

        rootItem[extremeFieldName] = result;
      }
    };

  });
