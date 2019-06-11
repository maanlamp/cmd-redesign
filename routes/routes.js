const database = require("../database/database.js");
const Remarkable = require("remarkable");
const md = new Remarkable();

function edit (req, res) {
	const { title } = req.params;
	res.render("edit", { title, raw: database.get(title).body });
}

function home(req, res) {
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

function read (req, res) {
	const { title } = req.params;
	if (!database.exists(title))
		res.status(404).end("Not Found.")
	else
		res.render("read", { title, html: md.render(database.get(title).body) });
}

module.exports = {
	edit,
	home,
	read
};