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

    var sampleOptions = {
      priority: [ "price", "rating", "popularity"],
      vetoedUsers: [],
      favoriteUsers: [],
      vetoedItems: [],
      favoriteItems: []
    }

    var self = this;

    this.findOptimalPath = function (itemId, options) {

      if (options.priority[0] == "price")
        return self.findBestPricePath(itemId);

    };

    this.findBestPricePath = function (itemId) {

      var item = ItemManager.getItemById(itemId);



    };

  });
