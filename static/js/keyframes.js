let isScrolling = false;
window.onscroll = function(e) {
    isScrolling = true;
    if (isScrolling) {
        const allIconsTopLeft = document.querySelectorAll('.icon-top-left');
        allIconsTopLeft.forEach(function(iconTopLeft) {
            iconTopLeft.classList.add('rotate');
        })

        const allIconsBottomLeft = document.querySelectorAll('.icon-bottom-left');
        allIconsBottomLeft.forEach(function(iconBottomLeft) {
            iconBottomLeft.classList.add('bounce');
        })

        const allIconsBottomRight = document.querySelectorAll('.icon-bottom-right');
        allIconsBottomRight.forEach(function(iconBottomRight) {
            iconBottomRight.classList.add('shake');
        })

        const allIconsTopRight = document.querySelectorAll('.icon-top-right');
        allIconsTopRight.forEach(function(iconTopRight) {
            iconTopRight.classList.add('zoom');
        })

        const allIconsSection = document.querySelectorAll('.icon-section');
        allIconsSection.forEach(function(iconSection) {
            iconSection.classList.add('ghost');
        })

        setTimeout(stopScrolling, 1000);
    } else {
        console.log('oops!')
    }
}

function stopScrolling() {
    const allIconsTopLeft = document.querySelectorAll('.icon-top-left');
    allIconsTopLeft.forEach(function(iconTopLeft) {
        iconTopLeft.classList.remove('rotate');
    })

    const allIconsBottomLeft = document.querySelectorAll('.icon-bottom-left');
    allIconsBottomLeft.forEach(function(iconBottomLeft) {
        iconBottomLeft.classList.remove('bounce');
    })

    const allIconsBottomRight = document.querySelectorAll('.icon-bottom-right');
    allIconsBottomRight.forEach(function(iconBottomRight) {
        iconBottomRight.classList.remove('shake');
    })

    const allIconsTopRight = document.querySelectorAll('.icon-top-right');
    allIconsTopRight.forEach(function(iconTopRight) {
        iconTopRight.classList.remove('zoom');
    })

    const allIconsSection = document.querySelectorAll('.icon-top-right');
    allIconsSection.forEach(function(iconSection) {
        iconSection.classList.remove('ghost');
    })
}