// Dark mode
const body = document.body;
const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('ashtvbd_theme') === 'dark') {
  body.classList.add('dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('ashtvbd_theme', body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Mobile nav
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Date text
const dateText = document.getElementById('dateText');
if (dateText) {
  const now = new Date();
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  dateText.textContent = now.toLocaleDateString('en-US', options);
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

