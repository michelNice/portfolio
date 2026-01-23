const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('translate-x-full');
  mobileMenu.classList.toggle('opacity-0');

  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-xmark');
});

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.add('opacity-0');

    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
  });
});
