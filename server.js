const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemon = require("nodemon");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, function() {
  console.log(`The server is up and running on port: ${PORT} .`);
});
