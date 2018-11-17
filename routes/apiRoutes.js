var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    // db.item.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  });

  // Create a new example
  app.post("/api/sign-up", function(req, res) {
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });

    db.User.create(req.body).then(function(dbUser) {
      console.log(dbUser);
      res.send(dbUser);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    // db.Example.destroy({ where: { id: req.params.id } }).then(function(
    //   dbExample
    // ) {
    //   res.json(dbExample);
    // });
  });

  // Toggle Vote by UserId, ItemId, and voteValue
  app.post("/api/votes", function(req, res) {
    console.log(req.body);

    // Search Database to see if a Vote for that ItemId has been made by that UserId
    db.Vote.find({
      where: {
        ItemId: req.body.ItemId,
        UserId: req.body.UserId
      }
    }).then(vote => {
      // If that Vote DOES NOT exist,
      if (!vote) {
        console.log("new vote!");

        // Create that vote
        db.Vote.create({
          voteValue: req.body.voteValue,
          ItemId: req.body.ItemId,
          UserId: req.body.UserId
        }).then(vote => {
          res.send(true);
        });
      }
      // If the Vote DOES exist,
      else {
        console.log("existing vote!");
        //check to see if the voteValue is equal
        if (vote.voteValue !== req.body.voteValue) {
          db.Vote.destroy({
            where: {
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }
          }).then(vote => {
            db.Vote.create({
              voteValue: req.body.voteValue,
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }).then(vote => {
              res.send(true);
            });
          });
        } else {
          // If the req.body.voteValue == drop that Vote
          db.Vote.destroy({
            where: {
              ItemId: req.body.ItemId,
              UserId: req.body.UserId
            }
          }).then(vote => {
            res.send(vote);
          });
        }
      }
    });
  });
};
