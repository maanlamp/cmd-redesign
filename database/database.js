class DB {
	constructor () {
		this.articles = [
			{
				"title": "Artikeltje",
				"body": "# Dit is een artikeltje.\n\nWist je dat je dingen kan doen met markdown?\n\nDingen zoals het volgende:\n- lol\n- nog iets\n- en nog wat anders.\n\n## Gave shit hè?\n\nJa best wel."
			}
		];
	}

	get (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.find(article => article.title.toLowerCase() === lowerCaseTitle);
	}

	set (title, body) {
		const lowerCaseTitle = title.toLowerCase();
		const index = this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle);
		if (index !== -1)
			this.articles.splice(index, 1, { title, body });
		else
			this.articles.push({ title, body });
	}

	exists (title) {
		const lowerCaseTitle = title.toLowerCase();
		return this.articles.findIndex(article => article.title.toLowerCase() === lowerCaseTitle) !== -1;
	}
}

module.exports = new DB();