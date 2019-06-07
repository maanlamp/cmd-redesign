const PORT = 1337;
const express = require("express");
const markdown = require("markdown");
const sass = require("node-sass");
const routes = require("./routes/routes.js");

const app = express();

app.use(express.static(__dirname + "/static"));
app.get("/editor", routes.editor);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));