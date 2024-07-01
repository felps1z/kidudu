const menuMobile = document.querySelector('#menu-mobile');

function openMenu() {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
}

function closeMenu() {
    menuMobile.classList.remove('block');
    menuMobile.classList.add('hidden');
}

function showItems() {
    const elementItems = document.querySelector('#items');
    let items = 0;
    elementItems.innerHTML = items;
}

showItems();

//Criação de um evento para sombra no header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY - header.offsetHeight;

    if (scrollPosition <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '5px 1px 5px rgba(0, 0, 0, 0.1)';
    }
});

ScrollReveal().reveal('#quemsomos', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

ScrollReveal().reveal('#loc-title', {
    origin: 'left',
    duration: 2000,
    distance: '20%'
});

//Footer

//Accordion de Menu
const am = document.querySelector('#accordion-menu');
const minusMenu = document.querySelector('#minus-menu');
const plusMenu = document.querySelector('#plus-menu');

function openMenuAccordion() {
    am.classList.toggle('hidden');
    minusMenu.classList.toggle('hidden');
    plusMenu.classList.toggle('hidden');
}

//Accordion de Contato
const ac = document.querySelector('#accordion-contact');
const minusContact = document.querySelector('#minus-contact');
const plusContact = document.querySelector('#plus-contact');

function openContactAccordion() {
    ac.classList.toggle('hidden');
    minusContact.classList.toggle('hidden');
    plusContact.classList.toggle('hidden');
}