var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/toys", function(req, res) {
    db.Toy.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // app.put("/api/toys/:id", function(req, res) {
  //   db.Toy.findAll.update({
  //     photoPath: req.body.photoPath
  //   }, {
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbBurger) {
  //     res.json(dbBurger);
  //   })
  //     .catch(function(err) {
  //       res.json(err);
  //     });
  // });

  app.post("/api/toys", function(req, res) {
    db.Toy.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/toys/:id", function(req, res) {
    db.Toy.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};