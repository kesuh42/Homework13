var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
    console.log("rendering handlebars page")
    console.log(hbsObject)
    res.render("index", hbsObject)
    })
})

router.post("/", function(req, res){
    burger.create(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result){
        res.send("Post successful")
    })
})

router.put("/", function(req, res){
    var condition = "id= " + req.params.id

    burger.update({
        devoured: true
    },
    condition, function(result){
        res.send("Update successful")
    })
})

router.delete("/", function(req, res){
    var condition = "id= " + req.params.id

    burger.delete(condition, function(result){
        res.send("Delete successful")
    })
})

module.exports = router