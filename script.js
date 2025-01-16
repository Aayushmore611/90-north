// Function to toggle the left menu visibility
function toggleLeftMenu() {
    const leftMenu = document.querySelector('.left-menu');
    leftMenu.classList.toggle('collapsed');  // Toggle 'collapsed' class
}

// Function to adjust page scale based on screen width
function adjustPageScale() {
    const width = window.innerWidth;

    if (width >= 992 && width <= 1600) {
        document.body.style.transform = 'scale(1.0)'; // Shrink by 90%
    } else if (width >= 700 && width < 992) {
        document.body.style.transform = 'scale(1.2)'; // Shrink by 80%
    } else if (width >= 600 && width < 700) {
        document.body.style.transform = 'scale(1.3)'; // Shrink by 75%
    } else if (width <= 600) {
        document.body.style.transform = 'scale(1.0)'; // Shrink by 50%
    } else {
        document.body.style.transform = 'scale(1)'; // No scaling
    }

    // Optionally, adjust the transform origin to keep the content centered
    document.body.style.transformOrigin = 'top center';
}

// Add an event listener to trigger the function on window resize
window.addEventListener('resize', adjustPageScale);

// Call the function on page load to set the initial scale
window.addEventListener('load', adjustPageScale);
