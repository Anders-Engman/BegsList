"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Items", [
      {
        name: "Bicycle",
        reason:
          "My bike got stolen again. Oh well I'm sure someone less fortunate than me is using it.",
        itemURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1200px-Left_side_of_Flying_Pigeon.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
      {
        name: "Bottle of Yamazaki 18",
        reason:
          "If you think I need you to buy this for me, you're crazy. But if you want to send like a Lemon go for it. ",
        itemURL:
          "https://dekanta.com/wp-content/uploads/2017/09/Yamazaki-18-Mizunara-2017.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        name: "Blonde wig",
        reason: "My NATURALLY blonde hair is fine. This is for my husband Paul",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/71%2BEfuQIiBL._SL1181_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6
      },
      {
        name: "German Bible",
        reason:
          "Reading the Bible in German is the only way to get all the versteckte Bedeutungen",
        itemURL:
          "https://upload.wikimedia.org/wikipedia/commons/0/03/Lutherbibel.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 3
      },
      {
        name: "Smoked Pepperoni Log",
        reason:
          "I'm running dangerously low on my supply of cured meats please help",
        itemURL:
          "https://www.piecesofvermont.com/mm5/graphics/00000001/pepperoni_348x233.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7
      },
      {
        name: "Rogaine",
        reason: "Oh to have hair again",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/51ujT-8NbbL._SY300_QL70_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5
      },
      {
        name: "Cheese Puffs",
        reason: "You take a pizza, roll it in hot, you've got Cheesy Blasters",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/71-Mg1ubW3L._SY879_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        name: "Picture of Jane Krakowski",
        reason: "The most beautiful woman ever",
        itemURL:
          "https://www.biography.com/.image/t_share/MTM1NzE4NDYzMTI0NTk4NzU0/jane-krakowski-publicist-photojpg.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 6
      },
      {
        name: "Lamborgini Murcielago",
        reason: "I forgot where I parked my car please buy me one",
        itemURL:
          "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/http://www.blogcdn.com/www.autoblog.com/media/2008/09/lp640_abg_06_opt.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4
      },
      {
        name: "Treadmill",
        reason: "With your help I am getting in shape. This is my year!",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/81HRvZe-WGL._SL1500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      },
      {
        name: "Stethoscope",
        reason:
          "I wonder if patients will mind if I speak into it so I don't have to hear what's wrong with them",
        itemURL:
          "https://upload.wikimedia.org/wikipedia/commons/d/d2/Stethoscope-2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 8
      },
      {
        name: "Reptile Food",
        reason:
          "My boa constrictor is constipated, please send food high in cricket fiber.",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/71RS1TXKq6L._SX425_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 4
      },
      {
        name: "Harvard Sweatshirt",
        reason: "I begged for the shirt, that means I went there",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/61S22quTItL._UX342_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 7
      },
      {
        name: "15 Pound Dumbells",
        reason:
          "I need to get stronger so I can fend off my eldest. Kyle....so strong",
        itemURL:
          "https://images-na.ssl-images-amazon.com/images/I/419d78w0h%2BL._US500_.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 5
      },
      {
        name: "Red Tom Ford Tie",
        reason:
          "Giving an elderly man a power tie is the same thing as charity.",
        itemURL:
          "https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMN5MGS_62_m?&wid=400&height=500",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
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
