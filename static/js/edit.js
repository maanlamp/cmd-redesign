import just from "/js/just.js/just.js";
import { getFirstHeadingLinkSafe } from "./parseMarkdown.js";
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
			await fetch("/save", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title: getFirstHeadingLinkSafe(raw), raw })
			})
				.then(res => res.json())
				.then(res => {
					if (!res.ok)
						console.warn("Notify user of failure.", res.error);
					
					window.location.href = `/read/${res.title}`;
				});
		});

	just.select("#cancel")
		.on("click", () => {
			//are you sure?
			//Cancel
			//redirect to ???
		});
}();