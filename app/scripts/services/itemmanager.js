'use strict';

/**
 * @ngdoc service
 * @name openMarketClientApp.ItemManager
 * @description
 * # ItemManager
 * Service in the openMarketClientApp.
 */
angular.module('openMarketClientApp')
  .service('ItemManager', function ($http) {

    this.getAllItems = function () {
      return allItems;
    };

    this.getItemById = function (id) {
      return allItems[id - 1];
    }


    var allItems = [

      // Paper Products

      {
        id: 1,
        name: "Matt Paper",
        description: "",
        thumbnail: "",
        purchaseCost: 0.01,
        userId: 1,
        rating: 4.3,
        itemAddress: "",
        dependencies: []
      },
      {
        id: 2,
        name: "Cardboard",
        description: "",
        thumbnail: "",
        purchaseCost: 0.005,
        userId: 1,
        rating: 3.54,
        itemAddress: "",
        dependencies: []
      },
      {
        id: 3,
        name: "Cold Pressed Linen",
        description: "",
        thumbnail: "",
        purchaseCost: 0.012,
        userId: 1,
        rating: 4.31,
        itemAddress: "",
        dependencies: []
      },
      {
        id: 4,
        name: "Shiny Paper",
        description: "",
        thumbnail: "",
        purchaseCost: 0.011,
        userId: 2,
        rating: 3.9,
        itemAddress: "",
        dependencies: []
      },
      {
        id: 5,
        name: "Simple Paper",
        description: "",
        thumbnail: "",
        purchaseCost: 0.011,
        userId: 2,
        rating: 3.43,
        itemAddress: "",
        dependencies: []
      },

      // Invitation Graphic Designers

      {
        id: 6,
        name: "Perfect Wedding Designs",
        description: "",
        thumbnail: "",
        purchaseCost: 0.06,
        userId: 5,
        rating: 4.71,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 7,
        name: "Shalom Aleyhem Designs",
        description: "",
        thumbnail: "",
        purchaseCost: 0.042,
        userId: 6,
        rating: 3.88,
        itemAddress: "",
        dependencies: []
      },

      // Ktuba Designs

      {
        id: 8,
        name: "New Age Ktuba",
        description: "",
        thumbnail: "",
        purchaseCost: 0.21,
        userId: 5,
        rating: 4.19,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 9,
        name: "Inscription Ktuba",
        description: "",
        thumbnail: "",
        purchaseCost: 0.51,
        userId: 5,
        rating: 4.58,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 10,
        name: "Tachless Ktuba",
        description: "",
        thumbnail: "",
        purchaseCost: 0.09,
        userId: 6,
        rating: 4.19,
        itemAddress: "",
        dependencies: []
      },

      // Sound Equipment
      {
        id: 11,
        name: "Full Surround Suite",
        description: "",
        thumbnail: "",
        purchaseCost: 2.57,
        userId: 27,
        rating: 4.72,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 12,
        name: "Compact Audio System",
        description: "",
        thumbnail: "",
        purchaseCost: 1.73,
        userId: 27,
        rating: 3.14,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 13,
        name: "AlienWare Surround",
        description: "",
        thumbnail: "",
        purchaseCost: 2.23,
        userId: 26,
        rating: 4.72,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 14,
        name: "Fugicom Surround",
        description: "",
        thumbnail: "",
        purchaseCost: 1.99,
        userId: 26,
        rating: 2.88,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 15,
        name: "Default Sound Set",
        description: "",
        thumbnail: "",
        purchaseCost: 0.95,
        userId: 28,
        rating: 2.14,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 16,
        name: "Deluxe Sound Set",
        description: "",
        thumbnail: "",
        purchaseCost: 1.95,
        userId: 28,
        rating: 2.45,
        itemAddress: "",
        dependencies: []
      },

      // Envelopes
      {
        id: 17,
        name: "Scented Envelopes",
        description: "",
        thumbnail: "",
        purchaseCost: 0.041,
        userId: 1,
        rating: 3.77,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 18,
        name: "Basic Envelopes",
        description: "",
        thumbnail: "",
        purchaseCost: 0.027,
        userId: 1,
        rating: 3.09,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 19,
        name: "Very Good Envelop!",
        description: "",
        thumbnail: "",
        purchaseCost: 0.015,
        userId: 2,
        rating: 2.98,
        itemAddress: "",
        dependencies: []
      },

      // Drink Sets

      {
        id: 20,
        name: "Wine in the City Deluxe",
        description: "",
        thumbnail: "",
        purchaseCost: 1.25,
        userId: 19,
        rating: 4.78,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 21,
        name: "Mikes Beer Collection",
        description: "",
        thumbnail: "",
        purchaseCost: 0.99,
        userId: 21,
        rating: 4.18,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 22,
        name: "Booze And Junk Set for Wedding",
        description: "",
        thumbnail: "",
        purchaseCost: 0.75,
        userId: 20,
        rating: 2.56,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 23,
        name: "Bobs Vintage Beers",
        description: "",
        thumbnail: "",
        purchaseCost: 1.05,
        userId: 22,
        rating: 2.45,
        itemAddress: "",
        dependencies: []
      },

      // Entertainment

      {
        id: 24,
        name: "Sarit Hadad Live",
        description: "",
        thumbnail: "",
        purchaseCost: 4.5,
        userId: 23,
        rating: 4.45,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 25,
        name: "Roey Levi Unfiltered",
        description: "",
        thumbnail: "",
        purchaseCost: 3.5,
        userId: 24,
        rating: 4.91,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 26,
        name: "Zeev's Magical Performance",
        description: "",
        thumbnail: "",
        purchaseCost: 0.85,
        userId: 25,
        rating: 3.21,
        itemAddress: "",
        dependencies: []
      },

      // Catering

      {
        id: 27,
        name: "Party Down Catering",
        description: "",
        thumbnail: "",
        purchaseCost: 2,
        userId: 16,
        rating: 4.07,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 28,
        name: "Humpit Vegan Humus",
        description: "",
        thumbnail: "",
        purchaseCost: 2.24,
        userId: 17,
        rating: 4.55,
        itemAddress: "",
        dependencies: []
      },

      {
        id: 29,
        name: "Segev Wedding Express",
        description: "",
        thumbnail: "",
        purchaseCost: 3.99,
        userId: 18,
        rating: 4.86,
        itemAddress: "",
        dependencies: []
      },

      // Invitation Design Managers
      {
        id: 30,
        name: "Royal Invitations Managers",
        description: "",
        thumbnail: "",
        purchaseCost: 0.17,
        userId: 7,
        rating: 4.04,
        itemAddress: "",
        dependencies: [
          {
            itemId: 1,
            quantity: 100,
            price: 0,
            set: "paper"
          },
          {
            itemId: 3,
            quantity: 100,
            price: 0,
            set: "paper"
          },
          {
            itemId: 17,
            quantity: 100,
            price: 0,
            set: "envelope"
          },
          {
            itemId: 18,
            quantity: 100,
            price: 0,
            set: "envelope"
          },
          {
            itemId: 6,
            quantity: 1,
            price: 0.059,
            set: "design"
          }
        ]
      },

      {
        id: 31,
        name: "Event Publicity Organization",
        description: "",
        thumbnail: "",
        purchaseCost: 0.11,
        userId: 8,
        rating: 3.66,
        itemAddress: "",
        dependencies: [
          {
            itemId: 2,
            quantity: 100,
            price: 0,
            set: "paper"
          },
          {
            itemId: 4,
            quantity: 100,
            price: 0,
            set: "paper"
          },
          {
            itemId: 5,
            quantity: 100,
            price: 0,
            set: "paper"
          },
          {
            itemId: 18,
            quantity: 100,
            price: 0,
            set: "envelope"
          },
          {
            itemId: 19,
            quantity: 100,
            price: 0,
            set: "envelope"
          },
          {
            itemId: 7,
            quantity: 1,
            price: 0,
            set: "design"
          }
        ]
      },

      //Rabbis

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

      {
        id: 33,
        name: "Rabbi David Orthodox Wedding",
        description: "",
        thumbnail: "",
        purchaseCost: 0.72,
        userId: 10,
        rating: 3.98,
        itemAddress: "",
        dependencies: [
          {
            itemId: 9,
            quantity: 1,
            price: 0,
            set: "design"
          }
        ]
      },

      // DJs

      {
        id: 34,
        name: "DJ Dror Crazy Face",
        description: "",
        thumbnail: "",
        purchaseCost: 0.96,
        userId: 11,
        rating: 3.71,
        itemAddress: "",
        dependencies: [
          {
            itemId: 11,
            quantity: 1,
            price: 0,
            set: "sound"
          },
          {
            itemId: 13,
            quantity: 1,
            price: 0,
            set: "sound"
          },
          {
            itemId: 15,
            quantity: 1,
            price: 0,
            set: "sound"
          }
        ]
      },

      {
        id: 35,
        name: "DJ Tal In Da House",
        description: "",
        thumbnail: "",
        purchaseCost: 1.15,
        userId: 12,
        rating: 3.79,
        itemAddress: "",
        dependencies: [
          {
            itemId: 12,
            quantity: 1,
            price: 0,
            set: "sound"
          },
          {
            itemId: 14,
            quantity: 1,
            price: 0,
            set: "sound"
          },
          {
            itemId: 16,
            quantity: 1,
            price: 0,
            set: "sound"
          }
        ]
      },

      // Bars

      {
        id: 36,
        name: "Zman Amiti Wedding Bar",
        description: "",
        thumbnail: "",
        purchaseCost: 1.18,
        userId: 29,
        rating: 3.97,
        itemAddress: "",
        dependencies: [
          {
            itemId: 20,
            quantity: 1,
            price: 0,
            set: "drinks"
          },
          {
            itemId: 22,
            quantity: 1,
            price: 0,
            set: "drinks"
          }
        ]
      },

      {
        id: 37,
        name: "Irish Charm Wedding Bar",
        description: "",
        thumbnail: "",
        purchaseCost: 1.18,
        userId: 30,
        rating: 3.82,
        itemAddress: "",
        dependencies: [
          {
            itemId: 21,
            quantity: 1,
            price: 0,
            set: "drinks"
          },
          {
            itemId: 23,
            quantity: 1,
            price: 0,
            set: "drinks"
          }
        ]
      },

      // Event Halls
      {
        id: 38,
        name: "Beit Andromeda",
        description: "",
        thumbnail: "",
        purchaseCost: 12.5,
        userId: 13,
        rating: 4.14,
        itemAddress: "",
        dependencies: [
          {
            itemId: 27, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 28, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 36, // 36, 37
            quantity: 1,
            price: 0,
            set: "bar"
          },

          {
            itemId: 24, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          },

          {
            itemId: 25, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          }
        ]
      },

      {
        id: 39,
        name: "Makom Ba Lev",
        description: "",
        thumbnail: "",
        purchaseCost: 8.25,
        userId: 14,
        rating: 4.09,
        itemAddress: "",
        dependencies: [
          {
            itemId: 29, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 28, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 37, // 36, 37
            quantity: 1,
            price: 0,
            set: "bar"
          },

          {
            itemId: 26, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          },

          {
            itemId: 25, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          }
        ]
      },

      {
        id: 40,
        name: "Hangar 11",
        description: "",
        thumbnail: "",
        purchaseCost: 19.99,
        userId: 15,
        rating: 4.74,
        itemAddress: "",
        dependencies: [
          {
            itemId: 27, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 29, // 27, 28, 29
            quantity: 1,
            price: 0,
            set: "catering"
          },
          {
            itemId: 36, // 36, 37
            quantity: 1,
            price: 0,
            set: "bar"
          },
          {
            itemId: 37, // 36, 37
            quantity: 1,
            price: 0,
            set: "bar"
          },

          {
            itemId: 25, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          },

          {
            itemId: 26, // 24, 25, 26
            quantity: 1,
            price: 0,
            set: "entertainment"
          }
        ]
      },

      // Wedding Planner

      {
        id: 41,
        name: "Awesome Wedding Organizer",
        description: "",
        thumbnail: "",
        purchaseCost: 2.25,
        userId: 18,
        rating: 5.00,
        itemAddress: "",
        dependencies: [
          {
            itemId: 38,
            quantity: 1,
            price: 0,
            set: "event_hall"
          },
          {
            itemId: 39,
            quantity: 1,
            price: 0,
            set: "event_hall"
          },
          {
            itemId: 40,
            quantity: 1,
            price: 0,
            set: "event_hall"
          },
          {
            itemId: 34,
            quantity: 1,
            price: 0,
            set: "dj"
          },
          {
            itemId: 35,
            quantity: 1,
            price: 0,
            set: "dj"
          },
          {
            itemId: 32,
            quantity: 1,
            price: 0,
            set: "rabbi"
          },
          {
            itemId: 33,
            quantity: 1,
            price: 0,
            set: "rabbi"
          },
          {
            itemId: 32,
            quantity: 1,
            price: 0,
            set: "invitations"
          },
          {
            itemId: 30,
            quantity: 1,
            price: 0,
            set: "invitations"
          }
        ]
      }
    ];

  });
