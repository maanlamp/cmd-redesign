import just from "./just.js/just.min.js";
import ResetableTimeout from "./Timeout.js";

void function lazyload () {
	const lazyImages = just.select("img.lazy");

	function loadAndClean (images) {
		images.each(image => {
			if (image.dataset.src)
				image.src = image.dataset.src;
			if (image.dataset.srcset)
				image.srcset = image.dataset.srcset;

			just
				.select(image)
				.class
					.remove("lazy")
				.exit()
				.dataset
					.remove("src")
					.remove("srcset");
		});
	}

	if ("loading" in HTMLImageElement.prototype) {
		loadAndClean(lazyImages);
	} else if ("IntersectionObserver" in window) {
		const lazyImageObserver = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;

				const lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;

				if (lazyImage.srcset)
					lazyImage.srcset = lazyImage.dataset.srcset;

				lazyImage.classList.remove("lazy");
				lazyImage.removeAttribute("data-src");
				lazyImage.removeAttribute("data-srcset");
				lazyImageObserver.unobserve(lazyImage);
			});
		});

		lazyImages.forEach(lazyImage => {
			lazyImageObserver.observe(lazyImage);
		});
	} else {
		loadAndClean(lazyImages);
	}
}();

void function initScrollToTopButton () {
	just.plugin(function removeAttribute (attr) {
		this.each(el => el.removeAttribute(attr));
	});

	const button = just.select("#top-button");
	button.removeAttribute("href");
	button.on("click", e => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});

	window.addEventListener("scroll", e => {
		if (window.scrollY < 300)
			return button.class.remove("visible");
		button.class.add("visible");
	});
}();

void function initAnimations () {
	function stopScrolling () {
		just.select(".icon-top-left, .icon-bottom-left, .icon-bottom-right, .icon-top-right, .icon-section")
			.class
				.remove("rotate")
				.remove("bounce")
				.remove("shake")
				.remove("zoom")
				.remove("ghost");
	}

	const stopTimeout = new ResetableTimeout({
		timeout: 1000,
		handler: stopScrolling
	});

	const startTimeout = new ResetableTimeout({
		timeout: 50,
		handler () {
			just.select(".icon-top-left").class.add("rotate");
			just.select(".icon-bottom-left").class.add("bounce");
			just.select(".icon-bottom-right").class.add("shake");
			just.select(".icon-top-right").class.add("zoom");
			just.select(".icon-section").class.add("ghost");
			stopTimeout.reset();
		}
	});

	window.addEventListener("scroll", () => {
		startTimeout.start();
	});
}();

void function initServiceWorker () {
	if (!("serviceWorker" in navigator))
		return console.error("Service Worker: Not available");

	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("/service-worker.js")
			.then(registration => {
				registration.update();
				console.log("Service Worker: Registered");
			}).catch(console.error);
	});
}();