const menuBox = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menuBox.addEventListener('click', function() {
    menuBox.classList.toggle('is-active');
    menuLink.classList.toggle('active');
});