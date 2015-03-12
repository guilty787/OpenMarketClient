'use strict';

/**
 * @ngdoc service
 * @name openMarketClientApp.UserManager
 * @description
 * # UserManager
 * Service in the openMarketClientApp.
 */
angular.module('openMarketClientApp')
  .service('UserManager', function () {


    this.getAllUsers = function() {
      return users;
    }

    this.getUserById = function(id) {
      return users[id - 1];
    }


    var users = [
      // Paper makers
      {
        id: 1,
        name: "Yossi Paper INC",
        paymentAddress: ""
      },

      {
        id: 2,
        name: "David Paper Number 1",
        paymentAddress: ""
      },

      // Print houses
      {
        id: 3,
        name: "Angel Print House",
        paymentAddress: ""
      },

      {
        id: 4,
        name: "Sokolov 40 Printing",
        paymentAddress: ""
      },

      // Graphic Designers
      {
        id: 5,
        name: "Maya Designs",
        paymentAddress: ""
      },

      {
        id: 6,
        name: "Ptsatsa Itsuv",
        paymentAddress: ""
      },

      // Invitation Designers
      {
        id: 7,
        name: "Your Party",
        paymentAddress: ""
      },

      {
        id: 8,
        name: "Haim Invitations",
        paymentAddress: ""
      },

      // Rabis

      {
        id: 9,
        name: "Rabi Amir",
        paymentAddress: ""
      },

      {
        id: 10,
        name: "Rabi David",
        paymentAddress: ""
      },

      // DJs

      {
        id: 11,
        name: "Dror Teicher",
        paymentAddress: ""
      },

      {
        id: 12,
        name: "Tal Aviv",
        paymentAddress: ""
      },

      // Event Halls
      {
        id: 13,
        name: "Andromeda",
        paymentAddress: ""
      },

      {
        id: 14,
        name: "Makom Balev",
        paymentAddress: ""
      },

      {
        id: 15,
        name: "Hangar 11",
        paymentAddress: ""
      },

      // Catering

      {
        id: 16,
        name: "Party Down Catering",
        paymentAddress: ""
      },

      {
        id: 17,
        name: "Humpit",
        paymentAddress: ""
      },

      {
        id: 18,
        name: "Segev",
        paymentAddress: ""
      },

      // Bar Suite
      {
        id: 19,
        name: "Wine in the City",
        paymentAddress: ""
      },

      {
        id: 20,
        name: "Booze and junk",
        paymentAddress: ""
      },

      {
        id: 21,
        name: "Mikes Beers",
        paymentAddress: ""
      },

      {
        id: 22,
        name: "Bobs Beers",
        paymentAddress: ""
      },

      // Entertainers
      {
        id: 23,
        name: "Sarit Hadad",
        paymentAddress: ""
      },

      {
        id: 24,
        name: "Roey Levi",
        paymentAddress: ""
      },

      {
        id: 25,
        name: "Zeev Magic",
        paymentAddress: ""
      },

      // Sound Equipment
      {
        id: 26,
        name: "Shekem Electric",
        paymentAddress: ""
      },

      {
        id: 27,
        name: "Panasonic",
        paymentAddress: ""
      },

      {
        id: 28,
        name: "Bobs Rentals",
        paymentAddress: ""
      },

      // Bars

      {
        id: 29,
        name: "Zman Amiti",
        paymentAddress: ""
      },

      {
        id: 30,
        name: "Irish Charm",
        paymentAddress: ""
      },

      {
        id: 31,
        name: "Best Wedding Organizers",
        paymentAddress: ""
      }

    ];
  });
