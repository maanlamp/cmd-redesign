import just from "/js/just.js/just.min.js";
import { getFirstHeadingLinkSafe } from "./parseMarkdown.js";
import redirect from "./redirect.js";
import ResetableTimeout from "./Timeout.js";
//Remarkable is available through a global script loaded before
const md = new Remarkable({
	html: true,
	typographer: true
});

void function initTextarea () {
	just.plugin(function setCursorToEnd () {
		this.elements[0].selectionStart = this.elements[0].selectionEnd = this.elements[0].value.length;
	});

	just.plugin(function empty () {
		just
			.select(this.elements[0].children)
			.each(child => child.remove());
		return just.select(this.elements[0]);
	});

	const input = just.select("#input");
	const output = just.select("#output");

	async function markdownPreprocessor (md) {
		const components = (await import("./components.js")).default;
		return md.replace(/#\{.+?\}/g, match => {
			const name = match.match(/#\{(.+?)\}/)[1];
			return (components.find(comp => comp.name === name) || {}).value || "";
		});
	}

	function HTMLPostprocessor (raw) {
		const elements = Array.from(new DOMParser().parseFromString(raw, "text/html").body.children);

		return elements
			// .map(el => { //This code extracts images in paragraphs and sets their titles, but it screws up the css
			// 	if (el.nodeName === "P" && el.childElementCount === 1 && el.firstElementChild.nodeName === "IMG") {
			// 		const img = el.firstElementChild;
			// 		img.setAttribute("title", img.getAttribute("alt"));
			// 		return img;
			// 	}

			// 	return el;
			// });
	}

	async function updateOutput () {
		const value = md.render(await markdownPreprocessor(input.value));
		output.empty();
		HTMLPostprocessor(value)
			.forEach(element => output.append(element));
	}

	const timeout = new ResetableTimeout({
		timeout: 500,
		handler: async () => await updateOutput()
	}).start();

	input
		.on("input", timeout.reset.bind(timeout))
		.setCursorToEnd();
}();

void
function initStatusbar () {
	const input = just.select("#input");
	just.select("#publish")
		.on("click", async () => {
			//Are you sure?
			const raw = input.value;
			const res = await just.http
				.post("/save")
				.json({
					title: getFirstHeadingLinkSafe(raw),
					raw
				});

			if (!res.ok)
				return console.warn("Notify user of failure.", res.error);

			redirect(`/read/${res.title}`);
		});

	just.select("#cancel")
		.on("click", () => {
			//Are you sure?
			const pathname = window.location.pathname
			const title = pathname.substring(pathname.lastIndexOf("/") + 1);
			redirect(`/read/${title}`);
		});
}();