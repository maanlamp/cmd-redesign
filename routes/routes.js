function home (req, res, next) {
	res.sendFile("html/home.html", { root: __dirname + "/../static"});
}

module.exports = {
	home
};