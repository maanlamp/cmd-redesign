const allIcons = document.querySelectorAll('.icon');

const sections = document.querySelectorAll('section')

sections.forEach(function(section){
	console.log(section.scrollTop())
})

// Setup isScrolling variable
let isScrolling;

function addAnimation() {
    allIcons.forEach(function(icon) {
        if (!icon.classList.contains('rotate')) {
            icon.classList.add('rotate');
        }
    })
}

// Listen for scroll events
window.addEventListener('scroll', function(event) {

    addAnimation()

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {

        // Run the callback
        console.log('Scrolling has stopped.');

        allIcons.forEach(function(icon) {
            if (icon.classList.contains('rotate')) {
                icon.classList.remove('rotate');
                icon.classList.add('finish')
            }
        });
    }, 100);

}, false);