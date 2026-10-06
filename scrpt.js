 const themeIcon = document.getElementById('theme-icon');

function toggleTheme() {
    const body = document.body;

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")) {
      themeIcon.src = "assets/light.png";
      themeIcon.alt = "Moon Icon"
    } else {
      themeIcon.src = "assets/dark.png";
      themeIcon.alt = "Sun Icon"
    }
}

themeIcon.addEventListener("click", toggleTheme)
