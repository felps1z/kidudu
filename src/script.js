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

// Selecionando todos os produtos
const products = document.querySelectorAll('.produto');
let quantity = 1; // Definindo a quantidade inicial
// Adicionando um evento de clique a cada produto
products.forEach(product => {
    product.addEventListener('click', () => {
        const modal = document.querySelector('#modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
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
        document.querySelector('#modal-title').textContent = title;
        document.querySelector('#modal-description').textContent = description;
        document.querySelector('#modal-price').textContent = price;
        const modalQuantity = document.querySelector('#modal-quantity');
        const modalBtn1 = document.querySelector('#modal-btn1');
        const modalBtn2 = document.querySelector('#modal-btn2');
        // Função para atualizar quantidade e preço no modal
        function updatePrice() {
            const priceElement = parseFloat(price.replace('R$ ', '').replace(',', '.'));
            const totalPrice = priceElement * quantity;
            document.querySelector('#modal-price').textContent = `R$ ${totalPrice.toFixed(2)}`;
        }

        // Adicionando um evento de clique ao botão de remover
        modalBtn1.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                modalQuantity.textContent = quantity;
                updatePrice(); // Atualiza o preço ao remover um item
            }
        });

        // Adicionando um evento de clique ao botão de adicionar
        modalBtn2.addEventListener('click', () => {
            if (quantity < 99) {
                quantity++;
                modalQuantity.textContent = quantity;
                updatePrice(); // Atualiza o preço ao adicionar um item
            }
        });

        // Fechar o modal se clicar fora dele
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        function closeModal() {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            quantity = 1; // Resetando a quantidade ao fechar o modal
            modalQuantity.textContent = quantity;
        }
    });
});



//Definindo Modal Cart
const modalCart = document.querySelector('#modal-cart');

document.addEventListener('click', e => {
    const el = e.target.closest('.nextModalBtn');
    if (el) {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Usando Fetch API para carregar a página
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

//Abrir modal cart
function openModalCart() {
    modalCart.classList.remove('hidden');
    modalCart.classList.add('flex');
}

//Fechar modal cart
function closeModalCart() {
    modalCart.classList.remove('flex');
    modalCart.classList.add('hidden');
}

//Evento na area de produtos
const produtos = document.querySelector('#produtos');

produtos.addEventListener('click', (event) => {
    let parentButton = event.target.closest('.add-to-cart-btn');

    if (parentButton) {
        const name = parentButton.getAttribute('data-name');
        const price = parseFloat(parentButton.getAttribute('data-price'));
        console.log(name, price);
    }

    //Adicionar ao carrinho
});

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const rua = form1.querySelector('#rua').value;
    const numero = form1.querySelector('#numero').value;
    const bairro = form1.querySelector('#bairro').value;
    const cep = form1.querySelector('#cep').value;
    const referencia = form1.querySelector('#referencia').value;
    const complemento = form1.querySelector('#complemento').value;
    console.log(rua, numero, bairro, cep, referencia, complemento);
});


//Adicionando itens ao carrinho
/*
let items = 0;
function showItems() {
    const elementItems = document.querySelector('#items');
    elementItems.innerHTML = items;
}
showItems();
function addItem() {
    items += quantity; 
    showItems(); 
}*/