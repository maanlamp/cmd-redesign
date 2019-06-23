document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;

                    if (lazyImage.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }

                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Possibly fall back to a more compatible method here

        lazyImages.forEach(function(image) {
            image.src = image.dataset.src;
            image.srcset = image.dataset.srcset;
            
            if(image.classList.contains('lazy')) {
                image.classList.remove('lazy');
            }
        });
    }
});