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

router.post("/api/burger", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.send("Post successful")
    })
})

router.put("/api/burger/:id", function(req, res){
    var condition = "id= " + req.params.id

    burger.update({
        devoured: 1
    },
    condition, function(result){
        res.send("Update successful")
    })
})

router.delete("/api/burger/:id", function(req, res){
    var condition = "id= " + req.params.id

    burger.delete(condition, function(result){
        res.send("Delete successful")
    })
})

module.exports = router