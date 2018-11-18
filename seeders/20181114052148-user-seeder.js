"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Liz Lemon",
        bio:
          "My name is Liz Lemon, I work at 30 Rockefeller Plaza. Jack and I are just friends. #downWithTheBeeperKing",
        username: "lizlemon",
        imageURL:
          "http://image.wikifoundry.com/image/1/BscG3Q6E4tisTLXx8r5bNQ9371/GW179H179",
        password: "test123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jack Donaghy",
        bio: "GE is my playground",
        imageURL:
          "http://image.wikifoundry.com/image/1/Ys3OaU5bmcwaQz2SW16UCw10296/GW179H179",
        username: "jack-attack",
        password: "password",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kenneth Parcels",
        bio: "Nothing beat the NBC Page Program",
        imageURL:
          "http://image.wikifoundry.com/image/1/-zPiHYX6z74wy1TZ-F2CrA10452/GW179H179",
        username: "theEndIsNear30",
        password: "bibble",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Tracy Jordan",
        bio: "I was in Scottie Pippin's wedding.",
        imageURL:
          "http://image.wikifoundry.com/image/1/VPpi_WmQ_DFY8gmAHxBPrw15045/GW179H179",
        username: "grizz",
        password: "dotcom",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pete Hornberger",
        bio: "Hornberger! Please don't make me go home.",
        imageURL:
          "http://image.wikifoundry.com/image/3/dYldptKhPgfmbG2rfdKT2w17629/GW117H117",
        username: "pistolpete6",
        password: "h@ir",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jenna Maroney",
        bio: "Eww keyboards",
        imageURL:
          "http://image.wikifoundry.com/image/1/hAz9e8rbeafbS3nF34ACPg12909/GW179H179",
        username: "jenna",
        password: "me29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Frank Russitano",
        bio: "MY HATS ARE MY BIOS",
        imageURL:
          "http://image.wikifoundry.com/image/3/v-O4qmoLRCYBzRGB0i61bA18559/GW117H117",
        username: "harvardsOK",
        password: "justOK",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dr. Leo Spaceman",
        bio: "I should not have taken those blue things...",
        imageURL:
          "http://image.wikifoundry.com/image/1/A3plIiP19jbMSAYevzSztQ5137/GW117H117",
        username: "drSpace",
        password: "Gordon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jonathan the Assistant - Test User (No Voting Record)",
        bio: "Some day all this will be ours sir",
        imageURL:
          "https://tribzap2it.files.wordpress.com/2012/08/maulik-pancholy-30-rock.jpg",
        username: "jAssistant",
        password: "jonahy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Dennis Duffy",
        bio: "All hail the Beeper King",
        imageURL:
          "http://30rockfanbase.weebly.com/uploads/7/9/8/5/7985207/5915420.jpg",
        username: "b33p3rking",
        password: "lizlovesme",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Devon Banks",
        bio:
          "Former GE Exec now stay at home Dad. Happy to get out of the ratrace.",
        imageURL:
          "https://upload.wikimedia.org/wikipedia/pt/thumb/1/10/30_Rock_-_Fireworks.jpg/250px-30_Rock_-_Fireworks.jpg",
        username: "daddybanks",
        password: "makingthisup",
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
