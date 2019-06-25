const database = require("../database/database.js");
const Remarkable = require("remarkable");
const md = new Remarkable({
	html: true,
	typographer: true
});

function edit (req, res) {
	const { title } = req.params;
	res.render("edit", { title, raw: database.get(title).raw });
}

function home(req, res) {
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

function read (req, res) {
	const { title } = req.params;

	function markdownPreprocessor (md) {
		const components = require("../database/components.js");
		return md.replace(/#\{.+?\}/g, match => {
			const name = match.match(/#\{(.+?)\}/)[1];
			return (components.find(comp => comp.name === name) || {}).value || "";
		});
	}

	if (!database.exists(title))
		res.status(404).end(`Page "${title}" Not Found.`);
	else
		res.render("read", { title, html: md.render(markdownPreprocessor(database.get(title).raw)) });
}

async function save (req, res) {
	//This needs security features
	try {
		const { title } = await database.set(undefined, req.body.raw);
		res.json({ ok: true, title });
	} catch (err) {
		res.json({ ok: false, error: err.stack });
	}
}

module.exports = {
	edit,
	home,
	read,
	save
};