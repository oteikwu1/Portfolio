 const themeIcon = document.getElementById('theme-icon');
 const openMenu = document.getElementById('open-menu');
 const mobilePanel = document.getElementById('mobile-panel');
 const closeMenu = document.getElementById('close-menu');
 const nameInput = document.getElementById('name-input');
 const emailInput = document.getElementById('email-input');
 const projectType = document.getElementById('project-type');
 const textArea = document.querySelector('.text-area');
 const submitButton = document.querySelector('.custom-button');

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

themeIcon.addEventListener("click", toggleTheme);

openMenu.addEventListener("click", () => {
  mobilePanel.classList.add('active')
});

closeMenu.addEventListener('click', () => {
  mobilePanel.classList.remove('active')
})



