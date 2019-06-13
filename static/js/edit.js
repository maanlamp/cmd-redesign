import just from "/js/just.js/just.min.js";
import { getFirstHeadingLinkSafe } from "./parseMarkdown.js";
import redirect from "./redirect.js";
const md = new Remarkable();

void async function initTextarea () {
	just.plugin(function setCursorToEnd () {
		this.elements[0].selectionStart = this.elements[0].value.length;
	});

	const input = just.select("#input");
	const output = just.select("#output");

	async function updateOutput () {
		const value = md.render(input.value);
		output.html(value);
	}

	input.on("input", async () => await updateOutput());

	await updateOutput();
	input.setCursorToEnd();
}();

void async function initStatusbar () {
	const statusbar = just.select("#statusbar");
	const input = just.select("#input");
	just.select("#publish")
		.on("click", async () => {
			//Are you sure?
			const raw = input.value;
			just.http
				.post("/save")
				.json({ title: getFirstHeadingLinkSafe(raw), raw })
				.then(res => res.json())
				.then(res => {
					if (!res.ok)
						return console.warn("Notify user of failure.", res.error);

					redirect(`/read/${res.title}`);
				});
		});

	just.select("#cancel")
		.on("click", () => {
			//are you sure?
			const pathname = window.location.pathname
			const title = pathname.substring(pathname.lastIndexOf("/") + 1);
			redirect(`/read/${title}`);
		});
}();