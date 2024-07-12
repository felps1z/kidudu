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
        document.querySelector('#modal-price').setAttribute('data-original-price', price);
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

//Função para capturar eventos dos forms
function capturaEventos() {
    //Verifica se existe o form 1 (PAGINA 1)
    const form1 = document.querySelector('#form-modal-cart-1');
    if (form1) {
        form1.addEventListener('submit', e => {
            e.preventDefault();

            //Pegando os dados do form
            const rua = document.querySelector('#rua').value;
            const numero = document.querySelector('#numero').value;
            const bairro = document.querySelector('#bairro').value;
            const cep = document.querySelector('#cep').value;
            const referencia = document.querySelector('#referencia').value;
            const complemento = document.querySelector('#complemento').value;

            //Validação dos campos
            if (!rua || !numero || !bairro || !cep) {
                alert('Preencha todos os campos obrigatórios!');
                return;
            }

            //Carrega a próxima página
            carregaPagina('modal-cart-2.html');
        });
    }

    //Verifica se existe o form 2 (PAGINA 2)
    const form2 = document.querySelector('#form-modal-cart-2');
    if (form2) {
        form2.addEventListener('submit', e => {
            e.preventDefault();

            //Pegando os dados do form
            const nome = document.querySelector('#nome').value;
            const telefone = document.querySelector('#telefone').value;
            const pagamento = document.querySelector('#pagamento').value;
            const troco = document.querySelector('#troco').value;

            //Validação dos campos
            if (!nome || !telefone || !pagamento || (pagamento === 'dinheiro' && !troco)) {
                alert('Preencha todos os campos obrigatórios!');
                return;
            }

            carregaPagina('modal-cart-3.html');
        });
        
        //Evento no botão de voltar para o form 1
        const backToForm1 = document.querySelector('#back-to-form-1');
        backToForm1.addEventListener('click', e => {
            e.preventDefault();
            carregaPagina('modal-cart-1.html');
        });

        //Adicionar 'precisa de troco?' caso seja em dinheiro
        const pagamento = document.querySelector('#pagamento');
        pagamento.addEventListener('change', e => {
            const selected = e.target.value;
            const troco = document.querySelector('#troco-container');

            if (selected === 'dinheiro') {
                troco.classList.remove('hidden');
                troco.classList.add('flex');
            } else {
                troco.classList.remove('flex');
                troco.classList.add('hidden');
            }
        });
    }
    
    //Verifica se existe o botão de voltar para o form 2 (PAGINA 3)
    const backToForm2 = document.querySelector('#back-to-form-2');
    if (backToForm2) {
        backToForm2.addEventListener('click', e => {
            e.preventDefault();
            carregaPagina('modal-cart-2.html');
        });

        //Atualiza o modal do carrinho
        updateCartModal();
        eventRemoveCartItem();
    }
}

//Captura os eventos dos forms inicialmente
capturaEventos();

//Função para carregar a próxima página
async function carregaPagina(href) {
    try {
        const response = await fetch(href);

        if (!response.ok) throw new Error('ERRO 404');
        //response.status !== 200

        const html = await response.text();
        carregaResultado(html);
    } catch (error) {
        console.log(error);
    }
}

//Jogando o resultado da requisição Fetch API na div .result
function carregaResultado(response) {
    document.querySelector('.result').innerHTML = response;

    //Captura os eventos dos forms página carregada
    capturaEventos();
}

//Ativado ao clicar no botão do carrinho
function openModalCart() {
    modalCart.classList.remove('hidden');
    modalCart.classList.add('flex');
    carregaPagina('modal-cart-1.html');
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

// Função de adicionar item ao carrinho
function addItem() {
    let modalQuantity = parseInt(document.querySelector('#modal-quantity').textContent);

    items += modalQuantity;
    showCountItems(); // atualizar contador

    const name = document.querySelector('#modal-title').textContent;

    // Preço modificado
    let price = parseFloat(document.querySelector('#modal-price').textContent.replace('R$ ', '').replace(',', '.'));
    console.log(price)

    // Preço original (sem modificação) pegado do atributo data-original-price do elemento #modal-price
    let originalPrice = parseFloat(document.querySelector('#modal-price').getAttribute('data-original-price').replace('R$ ', '').replace(',', '.'));
    console.log(originalPrice)

    // Se o produto já existir, 'existingItems' recebe true
    const existingItems = cart.find(product => product.name === name);

    // Se existir, incrementa a quantidade e o preço
    if (existingItems) {
        existingItems.quantity += modalQuantity;
        existingItems.price += price;

        closeModal();

        updateCartModal();
        eventRemoveCartItem();
    } else {
        //Senão, cria um novo produto
        const product = {
            name: name,
            price: price,
            originalPrice: originalPrice,
            quantity: modalQuantity
        };

        cart.push(product);

        closeModal();

        updateCartModal();
        eventRemoveCartItem();
    }
}
//Função para atualizar o modal do carrinho
function updateCartModal() {
    const cartItemsContainer = document.querySelector('#cartItemsContainer');
    const cartSubtotalValue = document.querySelector('#cartSubtotalValue');
    let SubtotalPrice = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');

        itemElement.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div>    
                    <p class="text-red-color text-xl">${item.name}</p>
                    <p class="text-sm">(Quantidade: ${item.quantity})</p>
                    <p class="text-sm">R$ ${item.price.toFixed(2)}</p>
                </div>
                
                <button class="remove-from-cart-btn text-gray-text" data-name="${item.name}">Remover</button>
            </div>
        `;

        SubtotalPrice += item.price;

        cartItemsContainer.appendChild(itemElement);
    })

    cartSubtotalValue.innerHTML = SubtotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

//Função para remover item do carrinho
function eventRemoveCartItem() {

    //Escutador de eventos no container do carrinho
    cartItemsContainer.addEventListener('click', (event) => {
        //Verificando se o botão clicado é o de remover
        if (event.target.classList.contains('remove-from-cart-btn')) {
            const name = event.target.getAttribute('data-name');

            removeItemCart(name);
        }
    })

    //Função para remover item do carrinho (e depois atualizar o modal) com base em seu nome
    function removeItemCart(name) {
        const index = cart.findIndex(item => item.name === name);

        // Se o o findIndex retornar -1, o item não existe
        if (index !== -1) {
            const item = cart[index];

            // Se a quantidade do mesmo produto for maior que 1
            if (item.quantity > 1) {
                // Atualizar quantidade e preço
                item.quantity--;
                item.price = item.price - item.originalPrice;

                // Atualizar modal
                updateCartModal();

                // Atualizar contador
                items--;
                showCountItems();
            } else if (item.quantity === 1) {
                // Remover item do carrinho
                cart.splice(index, 1);

                // Atualizar modal
                updateCartModal();

                // Atualizar contador
                items--;
                showCountItems();
            }
        }
    }
}