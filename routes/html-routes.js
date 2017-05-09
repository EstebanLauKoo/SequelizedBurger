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
        //db.Customer.findAll({}).then(function (dbCustomer) {
        //    var hbsObject2 = {
        //        customers: dbCustomer
        //    }
        //    res.render("index", hbsObject2)
        //})
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