export function getFirstHeading (raw) {
	return (raw.match(/^# (.+)$/m)||[""])[1];
}

export function hyphenCasify (title) {
	return title
		.toLowerCase()
		.replace(/[^\w ]/g, "")
		.replace(/ /g, "-");
}

export function getFirstHeadingLinkSafe (raw) {
	return hyphenCasify(getFirstHeading(raw));
}