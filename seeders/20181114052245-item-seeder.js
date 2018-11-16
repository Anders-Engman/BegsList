"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Items", [
      {
        name: "Bicycle",
        reason:
          "My bike got stolen again. Oh well I'm sure someone less fortunate than me is using it.",
        itemURL: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
      {
        name: "Bottle of Yamazaki 18",
        reason:
          "If you think I need you to buy this for me, you're crazy. But if you want to send like a Lemon go for it. ",
        itemURL: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        name: "Blonde wig",
        reason: "My NATURALLY blonde hair is fine. This is for my husband Paul",
        itemURL: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6
      }
      // {
      //   name: "German Bible",
      //   reason:
      //     "Reading the Bible in German is the only way to get all the versteckte Bedeutungen",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 3
      // },
      // {
      //   name: "Smoked Pepperoni Log",
      //   reason:
      //     "I'm running dangerously low on my supply of cured meats please help",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 7
      // },
      // {
      //   name: "Rogaine",
      //   reason: "Oh to have hair again",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 5
      // },
      // {
      //   name: "Cheese Puffs",
      //   reason: "You take a pizza, roll it in hot, you've got Cheesy Blasters",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 1
      // },
      // {
      //   name: "Picture of Jane Krakowski",
      //   reason: "The most beautiful woman ever",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 6
      // },
      // {
      //   name: "Lamborgini Murcielago",
      //   reason: "I forgot where I parked my car please buy me one",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 4
      // },
      // {
      //   name: "Treadmill",
      //   reason: "With your help I am getting in shape. This is my year!",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 1
      // },
      // {
      //   name: "Stethoscope",
      //   reason:
      //     "I wonder if patients will mind if I speak into it so I don't have to hear what's wrong with them",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 8
      // },
      // {
      //   name: "Reptile Food",
      //   reason:
      //     "My boa constrictor is constipated, please send food high in cricket fiber.",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 4
      // },
      // {
      //   name: "Harvard Sweatshirt",
      //   reason: "I begged for the shirt, that means I went there",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 7
      // },
      // {
      //   name: "15 Pound Dumbells",
      //   reason:
      //     "I need to get stronger so I can fend off my eldest. Kyle....so strong",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 5
      // },
      // {
      //   name: "Red Tom Ford Tie",
      //   reason:
      //     "Giving an elderly man a power tie is the same thing as charity.",
      //   itemURL: "",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   UserId: 2
      // }
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
