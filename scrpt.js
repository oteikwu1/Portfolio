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

    const isDarKMode = document.querySelector('.dark-mode')

    const themeIcon = document.querySelector('.dark-theme');

    if(isDarKMode) {
      themeIcon.src = './assets/light.png'
    }else {
       themeIcon.src = './assets/dark.png';
    }
   
}

themeIcon.addEventListener("click", toggleTheme);

openMenu.addEventListener("click", () => {
  mobilePanel.classList.add('active')
});

closeMenu.addEventListener('click', () => {
  mobilePanel.classList.remove('active')
})



