// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


    app.put("/:id", function (req, res) {
        db.Burger.update({devoured: req.body.devoured}, {
            where: {id: req.params.id}
        }).then(function (dbBurger) {
            res.redirect("/")
        })
    })

    // Get rotue for retrieving a single burger
    app.get("/api/burger/:id", function(req, res) {
        // 2. Add a join here to include the Author who wrote the Post
        db.Burger.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    //post route to create a new burger
    app.post("/:id", function (req, res) {
        var directory = "/" + req.params.id
        db.Burger.create({
                burger_name: req.body.burger_name,
                CustomerId: req.params.id
        })
            .then(function (dbBurger) {
            res.redirect(directory)
        })
    })


    // DELETE route for deleting burgers
    app.delete("/api/burgers/:id", function(req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });

};
