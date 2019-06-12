const PORT = 1337;
const express = require("express");
const routes = require("./routes/routes.js");
const bodyparser = require("body-parser").json();

//Setup app
const app = express();
app.set("view engine", "ejs");
app.use(bodyparser);
app.use(express.static(__dirname + "/static"));

//Define routes
app.get("/",              routes.home);
app.get("/:route/:title", async (req, res) => await routes[req.params.route](req, res));
app.post("/save",         async (req, res) => await routes.save(req, res));

//Start that badboy
app.listen(PORT, console.log.apply(null, [`Running on port ${PORT}`]));