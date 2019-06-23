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

        lazyImages.forEach(function (image) {
            image.src = image.dataset.src;
            image.srcset = image.dataset.srcset;

            if (image.classList.contains('lazy')) {
                image.classList.remove('lazy');
            }
        });
    }

    const topBtn = document.querySelector('#top-button');
    topBtn.href = '';
    topBtn.style.display = 'none';
    topBtn.addEventListener('click', function () {
        scrollToTop(5000);
    });

    window.onscroll = function () {
        if (window.pageYOffset > 500) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    };

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function () {
                if (window.scrollY != 0) {
                    window.scrollBy(0, scrollStep);
                } else clearInterval(scrollInterval);
            }, 15);
    }
});