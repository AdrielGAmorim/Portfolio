/*W*/

/******* NAVBAR DROPDOWN MENU ACTIVATOR *******/
const toggleMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
/******* END OFNAVBAR DROPDOWN MENU ACTIVATOR *******/


/******* SLIDER MANAGEMENT *******/
let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function() {
    nextImage();
}, 7000);

function nextImage() {
    count++;
    if(count > 3) {
        count = 1;
    }

    document.getElementById('radio' + count).checked = true;
}
/******* END OF SLIDER MANAGEMENT *******/
