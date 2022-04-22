/*W*/

const toggleMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})