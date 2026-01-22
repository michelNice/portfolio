const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
  });
});
