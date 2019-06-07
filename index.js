const PORT = 1337;
const express = require("express");
const routes = require("./routes/routes.js");

const app = express();

app.use(express.static(__dirname + "/static"));
app.get("/", routes.home);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));