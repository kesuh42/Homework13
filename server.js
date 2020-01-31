var express = require("express")

var PORT = process.env.PORT || 8080;

var app = express()

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars setup
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require the router stuff and use it
var router = require("./controllers/burgers_Controller.js");

app.use(router);

//Listener
app.listen(PORT, function() {
  console.log("I am listening, coder");
});
