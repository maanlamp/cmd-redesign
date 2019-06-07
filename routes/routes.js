const database = require("../database/database.js");
const marked = require("marked");

function editor (req, res, next) {
	res.sendFile("html/editor.html", { root: __dirname + "/../static"});
}

function home(req, res, next) {
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

function article (req, res, next) {
	const { title } = req.params;
	if (!database.exists(title))
		res.status(404).end("Not Found.")
	else
		res.end(marked.parse(database.get(title).body));
}

module.exports = {
	editor,
	home,
	article
};