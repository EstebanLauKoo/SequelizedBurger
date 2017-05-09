var db = require("../models");

module.exports = function(app) {
    app.get("/api/customers", function(req, res) {
        // 1. Add a join to include all of each Author's Posts
        db.Customer.findAll({}).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });

    app.get("/api/customers/:id", function(req, res) {
        // 2; Add a join to include all of the Customers's Burgers here
        db.Customer.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Burger]
        }).then(function(dbCustomer) {
            res.json(dbCustomer);
        });
    });


    app.delete("/api/customers/:id", function(req, res) {
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbCustomer) {
            res.redirect("/customers");
        });
    });

    //post route to create a new burger
    app.post("/customers", function (req, res) {
        db.Customer.create({name: req.body.name}).then(function (dbBurger) {
            res.redirect("/customers")
        })
    })

};