const menuToggleIcon = document.querySelector('#menu-toggle-icon');
const menu = document.querySelector('#menu');

menuToggleIcon.addEventListener('click', function () {
  menu.classList.toggle('show');
  menuToggleIcon.classList.toggle('active');
});
