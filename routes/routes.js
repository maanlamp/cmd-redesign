function editor (req, res, next) {
	res.sendFile("html/editor.html", { root: __dirname + "/../static"});
}

function home(req, res, next){
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

module.exports = {
	editor,
	home
};