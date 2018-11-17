"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Votes", [
      // Bicycle Vote Values - (5 votes all upVotes)
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
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
        UserId: 4,
        ItemId: 1
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 1
      },
      // Whiskey Value - (8 votes: all downVotes, 1 beggarCreated upV)
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 2
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 2
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 2
      },
      // Wig Value - (8 votes: half upV half downV)
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 3
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
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
        UserId: 7,
        ItemId: 3
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 3
      },

      // German Bible Value - (2 votes - 1 upV, 1 dV: test vote ranking/swing of low activity)
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 4
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 4
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 4
      },

      // Smoked Pepperoni Log - (high engagement; high-ranking )
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 5
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 5
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 5
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 5
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 5
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 5
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 5
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 5
      },
      // Rogaine - (med-high rank )

      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 6
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 6
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 6
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
        ItemId: 6
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
        ItemId: 6
      },

      // Cheese Puffs - (med-low rank )
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
        ItemId: 7
      },

      // Jane Krakowski - (very low rank, 1 upV, 9 dV )
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
        ItemId: 7
      },
      // Lambo - (very low rank, 1 upV, 9 dV )
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 7
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
        ItemId: 7
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
        ItemId: 7
      },
      // Treadmill - (very low rank, 1 upV, 9 dV )
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5,
        ItemId: 8
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8,
        ItemId: 8
      },
      {
        voteValue: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 10,
        ItemId: 8
      },
      {
        voteValue: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 11,
        ItemId: 8
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
