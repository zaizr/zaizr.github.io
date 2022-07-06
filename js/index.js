const darkMode = document.getElementById('darkMode');
let isDarkMode = false;
if (darkMode) {
    darkMode.addEventListener('click', () => {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--colorMode', 'linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240), rgb(235, 235, 235))')
            isDarkMode = false;
        } else {
            document.documentElement.style.setProperty('--colorMode', 'linear-gradient(#000, #010101, #020202)')
            isDarkMode = true;
        }
    });
}