function editor (req, res, next) {
	res.sendFile("html/editor.html", { root: __dirname + "/../static"});
}

module.exports = {
	editor
};