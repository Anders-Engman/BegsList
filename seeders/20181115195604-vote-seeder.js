"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Votes", [
      // Bicycle Vote Values - (5 votes all upVotes)
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 1
      },
      // Whiskey Value - (8 votes: all downVotes)
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      // Wig Value - (8 votes: half upV half downV)
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 3
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
