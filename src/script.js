//Menu Navbar - Mobile
const menuMobile = document.querySelector('#menu-mobile');

function openMenu() {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
}

function closeMenu() {
    menuMobile.classList.remove('block');
    menuMobile.classList.add('hidden');
}

//Adicionando itens ao carrinho
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

//ScrollReveal
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

ScrollReveal().reveal('#img-contato', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%'
});

//Accordion de Menu - Mobile
const am = document.querySelector('#accordion-menu');
const minusMenu = document.querySelector('#minus-menu');
const plusMenu = document.querySelector('#plus-menu');

function openMenuAccordion() {
    am.classList.toggle('hidden');
    minusMenu.classList.toggle('hidden');
    plusMenu.classList.toggle('hidden');
}

//Accordion de Contato - Mobile
const ac = document.querySelector('#accordion-contact');
const minusContact = document.querySelector('#minus-contact');
const plusContact = document.querySelector('#plus-contact');

function openContactAccordion() {
    ac.classList.toggle('hidden');
    minusContact.classList.toggle('hidden');
    plusContact.classList.toggle('hidden');
}


//Data e Hora

//Verificar se a hora atual está entre 10h e 18h
const date = new Date();
const hour = date.getHours();

//Verificar se hoje é domingo
const day = date.getDay();

if (hour >= 10 && hour <= 18 && day === 0) {
    document.querySelector('#open').innerHTML = '<div class="border-2 border-white rounded-full flex justify-center items-center h-4 w-4 mr-1"><div class="bg-white h-2 w-2 rounded-full"></div></div>Entrega disponível';
    document.querySelector('#open').classList.add('bg-green-500');
} else {
    document.querySelector('#open').innerHTML = '<i class="fa-regular fa-clock mr-2"></i> Entrega Indisponível';
    document.querySelector('#open').classList.add('bg-red-500');
}