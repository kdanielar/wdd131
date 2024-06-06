const themeSelector = document.getElementById('theme-selector');

function changeTheme() {
    const body = document.body;
    const logo = document.getElementById('logo');
    
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byu-idaho-logo-white.png'; // Ensure you have this image
    } else {
        body.classList.remove('dark');
        logo.src = 'byu-idaho-logo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);
