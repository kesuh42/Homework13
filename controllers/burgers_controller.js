var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
    res.render("index", hbsObject)
    })
})

router.post("/", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
        res.send("Post successful")
    })
})

router.update("/", function(req, res){
    burger.update()
})

router.delete("/", function(req, res){

})

module.exports = router