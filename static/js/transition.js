import just from "./just.js/just.min.js";

just.select("a:not(#top-button)").each(a => {
	just.select(a).on("click", () => {
		event.preventDefault();
		just.select("body").class.add("fadeout").exit().on("animationend", event => {
			if (event.animationName !== "fadeout") return;
			window.location.href = a.href;
		});
	});
});