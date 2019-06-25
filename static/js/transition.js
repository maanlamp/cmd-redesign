import just from "./just.js/just.min.js";

just.select("a").each(a => {
	just.select(a).on("click", () => {
		just.select("body").class.add("fadeout").exit().on("animationend", event => {
			if (event.animationName !== "fadeout") return;
			window.location.href = a.dataset.href;
		});
	}).dataset.add("href", a.href).exit().attributes.remove("href");
});