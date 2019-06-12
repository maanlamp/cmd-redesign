const database = require("../database/database.js");
const Remarkable = require("remarkable");
const md = new Remarkable();

function edit (req, res) {
	const { title } = req.params;
	res.render("edit", { title, raw: database.get(title).raw });
}

function home(req, res) {
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

function read (req, res) {
	const { title } = req.params;
	if (!database.exists(title))
		res.status(404).end(`Page "${title}" Not Found.`);
	else
		res.render("read", { title, html: md.render(database.get(title).raw) });
}

async function save (req, res) {
	//This needs security features
	try {
		const { title } = await database.set(undefined, req.body.raw);
		console.log(title);
		res.json({ ok: true, title });
	} catch (err) {
		res.json({ ok: false, error: err.toString() });
	}
}

module.exports = {
	edit,
	home,
	read,
	save
};