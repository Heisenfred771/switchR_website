const toggle = document.querySelector('.theme-toggle');

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('switchr-theme', theme);
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

toggle.addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

setTheme(document.documentElement.dataset.theme || 'light');
