// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
var express = require("express")

var db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Customer.findAll({
            include: [db.Burger]
        }).then(function (dbCustomer) {
            console.log(dbCustomer)
            var hbsObject = {
                Customer: dbCustomer,
            }
            res.render("main", hbsObject)
        })
        });

    app.get("/customer/:id", function (req, res) {
        db.Customer.findAll({
            where: {
                id: req.params.id
            },
            include: [db.Burger]
        }).then(function (dbCustomer) {
            var hbsObject = {
                Customer : dbCustomer
            }
            res.render("index", hbsObject)
        })
    })
    app.get("/customer", function (req, res) {
        db.Customer.findAll({}).then(function (dbCustomer) {
            var hbsObject = {
                customers: dbCustomer
            }
            res.render("customer", hbsObject)
        })
    })
};