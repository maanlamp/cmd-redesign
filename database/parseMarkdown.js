function getFirstHeading (raw) {
	return (raw.match(/^# (.+)$/m)||[""])[1];
}

function hyphenCasify (title) {
	return title
		.toLowerCase()
		.replace(/[^\w ]/g, "")
		.replace(/ /g, "-");
}

function getFirstHeadingLinkSafe (raw) {
	return hyphenCasify(getFirstHeading(raw));
}

module.exports = {
	getFirstHeading,
	hyphenCasify,
	getFirstHeadingLinkSafe
};