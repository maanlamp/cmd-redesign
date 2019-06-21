import just from "/js/just.js/just.min.js";
import {
	getFirstHeadingLinkSafe
} from "./parseMarkdown.js";
import redirect from "./redirect.js";
import ResetableTimeout from "./Timeout.js";
//Remarkable is available through a global script loaded before
const md = new Remarkable({
	html: true,
	typographer: true
});

//DEBUG
window.just = just;

void
function initTextarea() {
	just.plugin(function setCursorToEnd() {
		this.elements[0].selectionStart = this.elements[0].selectionEnd = this.elements[0].value.length;
	});

	just.plugin(function empty() {
		just.select(this.elements[0].children).each(child => child.remove());
		return just.select(this.elements[0]);
	})

	const input = just.select("#input");
	const output = just.select("#output");

	function markdownPreprocessor(md) {
		const components = [{
				name: "test",
				value: `<p>Dit is een testcomponent, om te laten zien dat het component-system werkt.</p>`
			},
			{
				name: "studentenwerk",
				value: `<div class="studentenwerk__article">
						<img
							sizes="(max-width: 600px) 100vw, 600px"
							srcset="../images/LR-kip-3-kopieren-small.jpg 320w,
									../images/LR-kip-3-kopieren-medium.jpg 490w,
									../images/LR-kip-3-kopieren-big.jpg 600w"
							src="../images/LR-kip-3-kopieren-big.jpg"
							alt="The game changer">
						<h3>The game changer</h3>
						<p>The Game Changer houdt de game-uren van uw kind bij. Als de tijd verstreken is kan uw kind niet meer spelen. Hoe eerder je stopt met gamen, hoe meer bonusuren je krijgt.</p>
					</div>
					<div class="studentenwerk__article">
						<img
							sizes="(max-width: 600px) 100vw, 600px"
							srcset="../images/LR-kip-3-kopieren-small.jpg 320w,
									../images/LR-kip-3-kopieren-medium.jpg 490w,
									../images/LR-kip-3-kopieren-big.jpg 600w"
							src="../images/LR-kip-3-kopieren-big.jpg"
							alt="The game changer">
						<h3>The game changer</h3>
						<p>The Game Changer houdt de game-uren van uw kind bij. Als de tijd verstreken is kan uw kind niet meer spelen. Hoe eerder je stopt met gamen, hoe meer bonusuren je krijgt.</p>
					</div>
					<div class="studentenwerk__article">
						<img
							sizes="(max-width: 600px) 100vw, 600px"
							srcset="../images/LR-kip-3-kopieren-small.jpg 320w,
									../images/LR-kip-3-kopieren-medium.jpg 490w,
									../images/LR-kip-3-kopieren-big.jpg 600w"
							src="../images/LR-kip-3-kopieren-big.jpg"
							alt="The game changer">
						<h3>The game changer</h3>
						<p>The Game Changer houdt de game-uren van uw kind bij. Als de tijd verstreken is kan uw kind niet meer spelen. Hoe eerder je stopt met gamen, hoe meer bonusuren je krijgt.</p>
					</div>`
			}
		];
		return md.replace(/#\{.+?\}/g, match => {
			const name = match.match(/#\{(.+?)\}/)[1];
			return (components.find(comp => comp.name === name) || {}).value || "";
		});
	}

	function HTMLPostprocessor(raw) {
		const elements = Array.from(new DOMParser().parseFromString(raw, "text/html").body.children);

		return elements
			.map(el => {
				if (el.nodeName === "P" && el.childElementCount === 1 && el.firstElementChild.nodeName === "IMG") {
					const img = el.firstElementChild;
					img.setAttribute("title", img.getAttribute("alt"));
					return img;
				}

				return el;
			});
	}

	function updateOutput() {
		const value = md.render(markdownPreprocessor(input.value));
		output.empty();
		HTMLPostprocessor(value)
			.forEach(element => output.append(element));
	}

	const timeout = new ResetableTimeout({
		timeout: 500,
		handler: updateOutput
	}).start();

	input
		.on("input", timeout.reset.bind(timeout))
		.setCursorToEnd();
}();

void
function initStatusbar() {
	const statusbar = just.select("#statusbar");
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
			//are you sure?
			const pathname = window.location.pathname
			const title = pathname.substring(pathname.lastIndexOf("/") + 1);
			redirect(`/read/${title}`);
		});
}();