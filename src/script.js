const menuMobile = document.querySelector('#menu-mobile');

function openMenu() {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
}

function closeMenu() {
    menuMobile.classList.remove('block');
    menuMobile.classList.add('hidden');
}