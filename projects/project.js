const themeIcon = document.getElementById('theme-icon');
const openMenu = document.getElementById('open-menu');
const mobilePanel = document.getElementById('mobile-panel');
const closeMenu = document.getElementById('close-menu');

function toggleTheme() {
  const body = document.body;

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    themeIcon.src = 'assets/light.png';
    themeIcon.alt = 'Moon Icon';
  } else {
    themeIcon.src = 'assets/dark.png';
    themeIcon.alt = 'Sun Icon';
  }
}

themeIcon.addEventListener('click', toggleTheme);

openMenu.addEventListener('click', () => {
  mobilePanel.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobilePanel.classList.remove('active');
});

