const PORT = 1337;
const express = require("express");
const routes = require("./routes/routes.js");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));
app.get("/", routes.home);
app.get("/read/:title", (req, res) => routes.read(req, res));
app.get("/edit/:title", (req, res) => routes.edit(req, res));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));