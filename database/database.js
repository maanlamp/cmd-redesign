const Entry = require("./Entry.js");
const { isUid } = require("./uid.js");
const { getFirstHeadingLinkSafe } = require("./parseMarkdown.js");

class DB {
	constructor () {
		this.articles = [
			new Entry({
				title: "cmd-amsterdam",
				raw: "# CMD-Amsterdam"
					+ "\n## Opleiding voor digital interactive design."
					+ "\n\nWij zijn Communication and Multimedia Design (CMD). Wij zijn een "
					+ "HBO-ontwerpopleiding voor digital interactive design. Onze studenten "
					+ "ontwerpen en realiseren digitale interactieve oplossingen die "
					+ "optimaal aansluiten bij de behoeften van de gebruikers."
					+ "\n\nIn de kern van de opleiding zit interaction design, visual "
					+ "design en techniek (met name frontend development). Onze vakdocenten "
					+ "hebben een goed netwerk en vertalen continu recente ontwikkelingen "
					+ "naar het gehele onderwijsprogramma. Afgestudeerde studenten zijn "
					+ "daarmee van grote waarde in het huidige werkveld. Daar zijn wij "
					+ "trots op!"
					+ "\n\n![Foto van iemand die een interface ontwerpt.](../images/cmd_daantjebons_0007.jpg)"
			})
		];
	}

	getByTitle (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.find(article => article.title.toLowerCase() === lowerCaseTitle);
	}

	getById (id) {
		return this.articles.find(article => article.id === id);
	}

	get (...args) {
		if (isUid(args[0]))
			return this.getById(...args);
		else
			return this.getByTitle(...args);
	}

	setByTitle (title = "", raw) {
		const lowerCaseTitle = title.toLowerCase();
		const index = this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle);
		let entry;
		if (index !== -1)
			this.articles.splice(index, 1, entry = new Entry({ title, raw }));
		else
			this.articles.push(entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));

		return entry;
	}

	setById (id, raw) {
		const index = this.articles.findIndex(article => article.id === id);
		let entry;
		if (index !== -1)
			this.articles.splice(index, 1, entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));
		else
			this.articles.push(entry = new Entry({ title: getFirstHeadingLinkSafe(raw), raw }));

		return entry;
	}

	set (...args) {
		if (isUid(args[0]))
			return this.setById(...args);
		else if (args[0] === undefined && typeof args[1] === "string")
			return this.setByTitle(getFirstHeadingLinkSafe(args[1]), ...args.slice(1));
		else
			return this.setByTitle(...args);
	}

	existsByTitle (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle) !== -1;
	}

	existsById (id) {
		return this.articles.findIndex(article => article.id === id) !== -1;
	}

	exists (...args) {
		if (isUid(args[0]))
			return this.existsById(...args);
		else
			return this.existsByTitle(...args);
	}
}

module.exports = new DB();