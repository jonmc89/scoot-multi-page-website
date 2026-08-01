const menuBtn = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  menuBtn.classList.toggle('menu-icon-close');
});
