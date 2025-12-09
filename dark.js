const themeLink = document.getElementById('theme-link');
const themeButton = document.getElementById('theme-toggle-button');
const bodyElement = document.body; // To toggle the data-theme attribute as well

// Initialize button text based on current theme when the page loads
if (themeLink.getAttribute('href') === 'dark.css') {
    themeButton.textContent = 'Switch to Light Theme';
} else {
    themeButton.textContent = 'Switch to Dark Theme';
}

function toggleTheme() {
    // 1. Toggle the CSS file
    if (themeLink.getAttribute('href') === 'dark.css') {
        // Switch to Light Theme
        themeLink.setAttribute('href', 'index.css');
        themeButton.textContent = 'Switch to Dark Theme';
        
        // Optional: Toggle data-theme on body (good practice for CSS targeting)
        bodyElement.setAttribute('data-theme', 'light');
        
    } else {
        // Switch to Dark Theme
        themeLink.setAttribute('href', 'dark.css');
        themeButton.textContent = 'Switch to Light Theme';
        
        // Optional: Toggle data-theme on body
        bodyElement.setAttribute('data-theme', 'dark');
    }
}

// Attach the function to the button click event
themeButton.addEventListener('click', toggleTheme);