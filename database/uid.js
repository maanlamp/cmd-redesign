function uid () {
	return "x"
		.repeat(32)
		.replace(/./g, () => (Math.random() * 16 | 0)
			.toString(16));
}

function isUid (value) {
	return /[0-9a-f]{32}/.test(value);
}

module.exports = {
	uid,
	isUid
};