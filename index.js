const PORT = 1337;
const express = require("express");
const routes = require("./routes/routes.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.get("/", routes.home);
app.get("/:route/:title", (req, res) => routes[req.params.route](req, res));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));