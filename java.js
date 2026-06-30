<<<<<<< HEAD
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons sous 48 h.');
  e.target.reset();
});
=======
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Merci pour votre message ! Nous vous répondrons sous 48 h.');
  e.target.reset();
});
>>>>>>> 01f9d35caaf4b82b4d1ba1b1966a99a884309438
