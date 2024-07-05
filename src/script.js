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

if (hour >= 10 && hour <= 18) {
    document.querySelector('#open').innerHTML = '<div class="border-2 border-white rounded-full flex justify-center items-center h-4 w-4 mr-1"><div class="bg-white h-2 w-2 rounded-full"></div></div>Entrega disponível';
    document.querySelector('#open').classList.add('bg-green-500');
} else {
    document.querySelector('#open').innerHTML = '<i class="fa-regular fa-clock mr-2"></i> Entrega Indisponível';
    document.querySelector('#open').classList.add('bg-red-500');
}

//Carrossel

const slides = document.querySelector('#slides')

setInterval(() => {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = 'translateX(-100%)';
}, 10000);
setInterval(() => {
    slides.style.transform = 'translateX(0)';
}, 20000);

//Botões do carrossel

const btn2 = document.querySelector('#btn2');
const btn1 = document.querySelector('#btn1');

setInterval(() => {
    btn2.style.backgroundColor = '#000';
    btn1.style.backgroundColor = '#A5A5A5';
}, 10000);

setInterval(() => {
    btn1.style.backgroundColor = '#000';
    btn2.style.backgroundColor = '#A5A5A5';
}, 20000);

//Se o usuário clicar no botão 1, o slide volta para o primeiro
btn1.addEventListener('click', () => {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = 'translateX(0)';
    btn1.style.backgroundColor = '#000';
    btn2.style.backgroundColor = '#A5A5A5';
});

//Se o usuário clicar no botão 2, o slide vai para o segundo
btn2.addEventListener('click', () => {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = 'translateX(-100%)';
    btn2.style.backgroundColor = '#000';
    btn1.style.backgroundColor = '#A5A5A5';
});

//Modal

//guardando numa constante todos os produtos
const products = document.querySelectorAll('.produto');

//se o usuário clicar em um produto, o modal é aberto e a imagem, a descrição e o preço são exibidos
products.forEach(product => {
    product.addEventListener('click', () => {
        const modal = document.querySelector('#modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        console.log(product)
        const img = product.querySelector('img').src;
        const price = product.querySelector('#price').textContent;
        const productId = product.getAttribute('data-product-id');
        let description = '';

        switch (productId) {
            case '1': description = 'Delicie-se com o sabor clássico e irresistível do nosso sacolé Sensação. Combinando o sabor do morango e um toque de chocolate, ele é perfeito para refrescar e adoçar o seu dia.'; break;
            case '2': description = 'Experimente o nosso sacolé de Paçoca, que traz todo o gostinho da tradicional paçoca em uma versão gelada e cremosa. Ideal para quem ama o sabor do amendoim.'; break;
            case '3': description = 'Para os chocólatras de plantão, o sacolé de Chocolate é uma escolha certeira. Feito com chocolate de alta qualidade, ele é cremoso, saboroso e vai conquistar seu paladar.'; break;
            case '4': description = 'Refresque-se com o sabor leve e frutado do sacolé de Maçã Verde. Perfeito para os dias quentes, é uma opção deliciosa e refrescante.'; break;
            case '5': description = 'O sacolé Baba Azul é a escolha perfeita para quem adora um toque de nostalgia. Com um sabor doce e refrescante, ele vai trazer boas lembranças da infância.'; break;
            case '6': description = 'Para os amantes de sabores tropicais, o sacolé de Mousse de Maracujá é irresistível. Cremoso e com o toque azedinho do maracujá, é uma verdadeira delícia.'; break;
            case '7': description = 'Se você prefere algo mais cítrico, o sacolé de Mousse de Limão é a escolha ideal. Com a combinação perfeita de doce e azedo, ele é refrescante e saboroso.'; break;
            case '8': description = 'Nosso sacolé Delícia de Abacaxi é uma explosão de sabor tropical. Feito com pedaços de abacaxi e uma cremosidade irresistível, é perfeito para quem busca um sabor premium e refrescante.'; break;
            case '9': description = 'Se você é fã de sobremesas clássicas, vai adorar o sacolé de Pudim. Com um sabor suave e aveludado, ele é uma verdadeira delícia em forma de sacolé.'; break;
            case '10': description = 'A combinação perfeita de queijo com goiabada agora em versão sacolé. O sabor Romeu e Julieta é uma opção sofisticada e deliciosa para quem busca algo diferente e saboroso.'; break;
        }

        document.querySelector('#modal-img').src = img;
        document.querySelector('#modal-description').innerHTML = description;
        document.querySelector('#modal-price').textContent = price;
    });
});

function closeModal() {
    const modal = document.querySelector('#modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}