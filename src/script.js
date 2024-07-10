//Menu Navbar - Mobile
const menuMobile = document.querySelector('#menu-mobile');
let cart = [];

function openMenu() {
    menuMobile.classList.remove('hidden');
    menuMobile.classList.add('block');
}

function closeMenu() {
    menuMobile.classList.remove('block');
    menuMobile.classList.add('hidden');
}

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

// HORA DE FUNCIONAMENTO

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

// CARROSSEL

const slides = document.querySelector('#slides')

//Carrossel automático
setInterval(() => {
    slides.style.transition = 'transform 1s ease-in-out';
    slides.style.transform = 'translateX(-100%)';
}, 10000);
setInterval(() => {
    slides.style.transform = 'translateX(0)';
}, 20000);

//Botões de controle do carrossel
const btn2 = document.querySelector('#btn2');
const btn1 = document.querySelector('#btn1');

//Mudando a cor dos botões de acordo com o slide
setInterval(() => {
    btn2.style.backgroundColor = '#000';
    btn1.style.backgroundColor = '#A5A5A5';
}, 10000);
setInterval(() => {
    btn1.style.backgroundColor = '#000';
    btn2.style.backgroundColor = '#A5A5A5';
}, 20000);

//Se o usuário clicar no botão 1, o slide vai para o primeiro
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

// PRODUTOS E MODAL

// Selecionando todos os produtos
const products = document.querySelectorAll('.produto');
// Adicionando um evento de clique a cada produto
products.forEach(product => {
    product.addEventListener('click', () => {
        let quantity = 1;

        //Abrindo modal ao clicar no produto
        const modal = document.querySelector('#modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        // Pegando os dados do produto clicado
        const img = product.querySelector('img').src;
        const alt = product.querySelector('img').alt;
        const title = product.querySelector('h3').textContent;
        const price = product.querySelector('.price').textContent;
        const productId = product.getAttribute('data-product-id');

        let description = '';

        // Verificando qual é o produto clicado e exibindo a descrição correspondente
        switch (productId) {
            case '1': description = 'Delicie-se com o sabor clássico e irresistível do nosso kidudu Sensação. Combinando o sabor do morango e um toque de chocolate, ele é perfeito para refrescar e adoçar o seu dia.'; break;
            case '2': description = 'Experimente o nosso kidudu de Paçoca, que traz todo o gostinho da tradicional paçoca em uma versão gelada e cremosa. Ideal para quem ama o sabor do amendoim.'; break;
            case '3': description = 'Para os chocólatras de plantão, o kidudu de Chocolate é uma escolha certeira. Feito com chocolate de alta qualidade, ele é cremoso, saboroso e vai conquistar seu paladar.'; break;
            case '4': description = 'Refresque-se com o sabor leve e frutado do kidudu de Maçã Verde. Perfeito para os dias quentes, é uma opção deliciosa e refrescante.'; break;
            case '5': description = 'O kidudu Baba Azul é a escolha perfeita para quem adora um toque de nostalgia. Com um sabor doce e refrescante, ele vai trazer boas lembranças da infância.'; break;
            case '6': description = 'Para os amantes de sabores tropicais, o kidudu de Mousse de Maracujá é irresistível. Cremoso e com o toque azedinho do maracujá, é uma verdadeira delícia.'; break;
            case '7': description = 'Se você prefere algo mais cítrico, o kidudu de Mousse de Limão é a escolha ideal. Com a combinação perfeita de doce e azedo, ele é refrescante e saboroso.'; break;
            case '8': description = 'Nosso kidudu Delícia de Abacaxi é uma explosão de sabor tropical. Feito com pedaços de abacaxi e uma cremosidade irresistível, é perfeito para quem busca um sabor premium e refrescante.'; break;
            case '9': description = 'Se você é fã de sobremesas clássicas, vai adorar o kidudu de Pudim. Com um sabor suave e aveludado, ele é uma verdadeira delícia em forma de kidudu.'; break;
            case '10': description = 'A combinação perfeita de queijo com goiabada agora em versão kidudu. O sabor Romeu e Julieta é uma opção sofisticada e deliciosa para quem busca algo diferente e saboroso.'; break;
        }

        // Exibindo a imagem, a descrição e o preço no modal
        document.querySelector('#modal-img').src = img;
        document.querySelector('#modal-img').alt = alt;
        document.querySelector('#modal-title').innerHTML = title;
        document.querySelector('#modal-description').innerHTML = description;
        document.querySelector('#modal-price').innerHTML = price;
        document.querySelector('#modal-quantity').innerHTML = quantity;




        //Funcionalidades do modal

        // botões de adicionar e remover
        const modalQuantity = document.querySelector('#modal-quantity');
        const modalBtn1 = document.querySelector('#modal-btn1');
        const modalBtn2 = document.querySelector('#modal-btn2');
 
        function updateQuantity() {
            modalQuantity.innerHTML = quantity;
        }

        function updatePrice() {
            const priceElement = parseFloat(price.replace('R$ ', '').replace(',', '.'));
            const totalPrice = priceElement * quantity;
            document.querySelector('#modal-price').innerHTML = `R$ ${totalPrice.toFixed(2)}`;
        }

        // evento de clique ao botão de remover
        modalBtn1.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                updateQuantity();
                updatePrice();
            }
        });
        
        // evento de clique ao botão de adicionar
        modalBtn2.addEventListener('click', () => {
            if (quantity < 99) {
                quantity++;
                updateQuantity();
                updatePrice();
            }
        });

        // Fechar o modal se clicar fora dele
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            quantity = 1;
            updateQuantity();
            updatePrice();
            modal.classList.remove('flex');
            modal.classList.add('hidden');
        }
    });
});

//MODAL CART

const modalCart = document.querySelector('#modal-cart');

//Evento de clique no botão de prosseguir
document.addEventListener('click', e => {
    const el = e.target.closest('.nextModalBtn');
    if (el) {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Usando Fetch API para carregar a próxima página
function carregaPagina(el) {
    const href = el.getAttribute('href');

    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error('ERRO 404');
            return response.text();
        })
        .then(html => carregaResultado(html))
        .catch(error => console.log(error));
}

//Jogando o resultado na div .result
function carregaResultado(response) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = response;
}

//Abrir
function openModalCart() {
    modalCart.classList.remove('hidden');
    modalCart.classList.add('flex');
}

//Fechar
function closeModalCart() {
    modalCart.classList.remove('flex');
    modalCart.classList.add('hidden');
}

//Fechar ao clicar fora dele
modalCart.addEventListener('click', (event) => {
    if (event.target === modalCart) {
        closeModalCart();
    }
});

// HEADER - Contador de itens no carrinho

let items = 0;

function showCountItems() {
    const elementItems = document.querySelector('#items');
    elementItems.innerHTML = items;
}

showCountItems();


// MODAL - Adicionando itens ao carrinho (Ao clicar no botão de adicionar)

function closeModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

function addItem() {
    let modalQuantity = parseInt(document.querySelector('#modal-quantity').textContent);
    items += modalQuantity;
    showCountItems();

    const name = document.querySelector('#modal-title').textContent;
    let price = parseFloat(document.querySelector('#modal-price').textContent.replace('R$ ', '').replace(',', '.'));

    const existingItems = cart.find(product => product.name === name);

    if (existingItems) {
        existingItems.quantity += modalQuantity;
        existingItems.price += price;
        console.log(cart);
        closeModal();
        return;
    } else {
        const product = {
            name: name,
            price: price,
            quantity: modalQuantity
        };

        cart.push(product);
        console.log(cart);
        closeModal();
    }
}