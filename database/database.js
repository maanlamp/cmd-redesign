const Entry = require("./Entry.js");
const { isUid } = require("./uid.js");
const { getFirstHeadingLinkSafe } = require("./parseMarkdown.js");

class DB {
	constructor () {
		this.articles = [
			new Entry({
				title: "dit-is-een-artikeltje",
				raw: "# Dit is een artikeltje.\n\nWist je dat je dingen kan doen met markdown?\n\nDingen zoals het volgende:\n- lol\n- nog iets\n- en nog wat anders.\n\n## Gave shit hè?\n\nJa best wel."
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

	setByTitle (title, raw) {
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