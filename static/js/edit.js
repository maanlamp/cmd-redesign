import just from "/js/just.js/just.min.js";
import { getFirstHeadingLinkSafe } from "./parseMarkdown.js";
import redirect from "./redirect.js";
import ResetableTimeout from "./Timeout.js";
//Remarkable is available through a global script loaded before
const md = new Remarkable({
	html: true,
	typographer: true
});

//DEBUG
window.just = just;

void function initTextarea () {
	just.plugin(function setCursorToEnd () {
		this.elements[0].selectionStart = this.elements[0].selectionEnd = this.elements[0].value.length;
	});

	just.plugin(function empty () {
		just.select(this.elements[0].children).each(child => child.remove());
		return just.select(this.elements[0]);
	})

	const input = just.select("#input");
	const output = just.select("#output");

	function markdownPreprocessor (md) {
		const components = [
			{
				name: "test",
				value: `<p>Dit is een testcomponent, om te laten zien dat het component-system werkt.</p>`
			},
			{
				name: "contact",
				value: `<form action="" class="contact__form" id="contact-form">
							<div class="contact-form-left">
								<div class="dropdown">
									<button class="dropbtn">Onderwerp</button>
									<div class="dropdown-content">
										<a href="#">Vraag</a>
										<a href="#">Samenwerken</a>
										<a href="#">Overig</a>
									</div>
								</div>
								<input class="form__name" type="text" name="" placeholder="Naam" aria-label="Vul je naam in">
								<input class="form__email" type="email" class="email" name="" placeholder="Mailadres (i.v.m. reply" aria-label="Vul je e-mailadres in">
							</div>
							<div class="contact-form-right">
								<textarea class="form" name="" id="" placeholder="Inhoud bericht" aria-label="Vul hier de inhoud van je bericht in"></textarea>
							</div>
						</form>`
			},
			{
				name: "contactpersonen",
				value: `<section class="staff">
							<div class="staff__card">
								<img class="card__image" src="../images/staff/harry-zengerink.jpg" alt="Foto van Harry Zengerink">
								<p class="card__name">Harry Zengerink</p>
								<p class="card__position">Opleidingsmanager</p>
								<p class="card__phone">06 – 21 15 89 83</p>
							</div>
							<div class="staff__card">
								<img class="card__image" src="../images/staff/marielle-beekman.jpg" alt="Foto van Harry Zengerink">
								<p class="card__name">Marielle Beekman</p>
								<p class="card__position">Hoofd Onderwijsbureau</p>
								<p class="card__phone">+31 (0) 20 595 1855</p>
							</div>
							<div class="staff__card">
								<img class="card__image" src="../images/staff/jos-kok.jpg" alt="Foto van Harry Zengerink">
								<p class="card__name">Jos Kok</p>
								<p class="card__position">Stagecoördinator</p>
								<p class="card__phone">06 – 21 15 71 22</p>
							</div>
							<div class="staff__card">
								<img class="card__image" src="../images/staff/mattijs-blekemolen.jpg" alt="Foto van Harry Zengerink">
								<p class="card__name">Mattijs Blekemolen</p>
								<p class="card__position">Externe Samenwerking</p>
								<p class="card__phone">06 – 21 15 61 86</p>
							</div>
						</section>
					`
			},{
				name: "gda",
				value: `<iframe title="vimeo-player" src="https://player.vimeo.com/video/281269437" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
			}
		];
		return md.replace(/#\{.+?\}/g, match => {
			const name = match.match(/#\{(?<name>.+?)\}/)[1];
			return (components.find(comp => comp.name === name)||{}).value||"";
		});
	}

	function HTMLPostprocessor (raw) {
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

	function updateOutput () {
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

void function initStatusbar () {
	const statusbar = just.select("#statusbar");
	const input = just.select("#input");
	just.select("#publish")
		.on("click", async () => {
			//Are you sure?
			const raw = input.value;
			const res = await just.http
				.post("/save")
				.json({ title: getFirstHeadingLinkSafe(raw), raw });

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