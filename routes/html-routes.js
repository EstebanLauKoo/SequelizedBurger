// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var express = require("express")

var db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function (dbBurger) {
            var hbsObject = {
                burgers: dbBurger
            };
            res.render("index", hbsObject)
        })
        });

    app.get("/customers", function (req, res) {
        db.Customer.findAll({}).then(function (dbCustomer) {
            var hbsObject = {
                customers: dbCustomer
            }
            res.render("customer", hbsObject)
        })
    })
};