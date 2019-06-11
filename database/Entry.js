const { uid } = require("./uid.js");

module.exports = class Entry {
	constructor ({
		title,
		raw,
		id
	} = {}) {
		this.title = title;
		this.raw = raw;
		this.id = id || uid();
	}
}