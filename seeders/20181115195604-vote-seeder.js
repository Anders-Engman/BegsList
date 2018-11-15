"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Votes", [
      {
        upVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        upVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        upVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        upVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        downVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        downVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        downVote: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
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
