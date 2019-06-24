document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if("loading" in HTMLImageElement.prototype) {
        lazyImages.forEach(function (image) {
            image.src = image.dataset.src;
            image.srcset = image.dataset.srcset;

            if (image.classList.contains("lazy")) {
                image.classList.remove("lazy");
            }
        });
    }
    else if ("IntersectionObserver" in window) {
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

            if (image.classList.contains("lazy")) {
                image.classList.remove("lazy");
            }
        });
    }

    const topBtn = document.querySelector("#top-button");
    topBtn.href = "";
    topBtn.style.display = "none";
    topBtn.addEventListener("click", function () {
        scrollToTop(5000);
    });

    window.onscroll = function () {
        if (window.pageYOffset > 500) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
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

    let isScrolling = false;
    window.onscroll = function (e) {
        isScrolling = true;
        if (isScrolling) {
            const allIconsTopLeft = document.querySelectorAll(".icon-top-left");
            allIconsTopLeft.forEach(function (iconTopLeft) {
                iconTopLeft.classList.add("rotate");
            })

            const allIconsBottomLeft = document.querySelectorAll(".icon-bottom-left");
            allIconsBottomLeft.forEach(function (iconBottomLeft) {
                iconBottomLeft.classList.add("bounce");
            })

            const allIconsBottomRight = document.querySelectorAll(".icon-bottom-right");
            allIconsBottomRight.forEach(function (iconBottomRight) {
                iconBottomRight.classList.add("shake");
            })

            const allIconsTopRight = document.querySelectorAll(".icon-top-right");
            allIconsTopRight.forEach(function (iconTopRight) {
                iconTopRight.classList.add("zoom");
            })

            const allIconsSection = document.querySelectorAll(".icon-section");
            allIconsSection.forEach(function (iconSection) {
                iconSection.classList.add("ghost");
            })

            setTimeout(stopScrolling, 1000);
        } else {
            console.log("oops!")
        }
    }

    function stopScrolling() {
        const allIconsTopLeft = document.querySelectorAll(".icon-top-left");
        allIconsTopLeft.forEach(function (iconTopLeft) {
            iconTopLeft.classList.remove("rotate");
        })

        const allIconsBottomLeft = document.querySelectorAll(".icon-bottom-left");
        allIconsBottomLeft.forEach(function (iconBottomLeft) {
            iconBottomLeft.classList.remove("bounce");
        })

        const allIconsBottomRight = document.querySelectorAll(".icon-bottom-right");
        allIconsBottomRight.forEach(function (iconBottomRight) {
            iconBottomRight.classList.remove("shake");
        })

        const allIconsTopRight = document.querySelectorAll(".icon-top-right");
        allIconsTopRight.forEach(function (iconTopRight) {
            iconTopRight.classList.remove("zoom");
        })

        const allIconsSection = document.querySelectorAll(".icon-top-right");
        allIconsSection.forEach(function (iconSection) {
            iconSection.classList.remove("ghost");
        })
    }
});