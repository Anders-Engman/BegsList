"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Liz Lemon",
        bio:
          "My name is Liz Lemon, I work at 30 Rockefeller Plaza. Jack and I are just friends. #downWithTheBeeperKing",
        username: "lizlemon",
        password: "test123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jack Donaghy",
        bio: "GE is my playground",
        username: "jack-attack",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kenneth Parcels",
        bio: "Nothing beat the NBC Page Program",
        username: "theEndIsNear30",
        password: "bibble",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tracy Jordan",
        bio: "I was in Scottie Pippin's wedding.",
        username: "grizz",
        password: "dotcom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pete Hornberger",
        bio: "Hornberger! Please don't make me go home.",
        username: "pistolpete6",
        password: "h@ir",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jenna Maroney",
        bio: "Eww keyboards",
        username: "jenna",
        password: "me29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Frank Russitano",
        bio: "MY HATS ARE MY BIOS",
        username: "harvardsOK",
        password: "justOK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. Leo Spaceman",
        bio: "I should not have taken those blue things...",
        username: "drSpace",
        password: "Gordon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jonathan the Assistant - Test User (No Voting Record)",
        bio: "Some day all this will be ours sir",
        username: "jAssistant",
        password: "jonahy",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
