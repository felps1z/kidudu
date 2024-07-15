const DOMUtils = {
    showElement: (element) => {
        element.classList.remove('hidden');
        element.classList.add('flex');
    },
    hideElement: (element) => {
        element.classList.remove('flex');
        element.classList.add('hidden');
    },
    toggleElement: (element) => {
        element.classList.toggle('hidden');
    }
};

//Menu Navbar - Mobile
const menuMobile = document.querySelector('#menu-mobile');
let cart = [];

//Variáveis do alerta
const alert = document.querySelector('#alert');
const alertMessage = document.querySelector('#alert-message');
const alertClose = document.querySelector('#alert-close');
const alertDescription = document.querySelector('#alert-description');
const header = document.querySelector('header');

function openMenu() {
    DOMUtils.showElement(menuMobile);
}

function closeMenu() {
    DOMUtils.hideElement(menuMobile);
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
    DOMUtils.toggleElement(am);
    DOMUtils.toggleElement(minusMenu);
    DOMUtils.toggleElement(plusMenu);
}

//Accordion de Contato - Mobile
const ac = document.querySelector('#accordion-contact');
const minusContact = document.querySelector('#minus-contact');
const plusContact = document.querySelector('#plus-contact');

function openContactAccordion() {
    DOMUtils.toggleElement(ac);
    DOMUtils.toggleElement(minusContact);
    DOMUtils.toggleElement(plusContact);
}

// HORA DE FUNCIONAMENTO

//Verificar se a hora atual está entre 10h e 18h

function verificaHora() {
    const date = new Date();
    const hour = date.getHours();
    return hour >= 10 && hour <= 18;
}

if (verificaHora()) {
    document.querySelector('#open').innerHTML = '<div class="border-2 border-white rounded-full flex justify-center items-center h-4 w-4 mr-1"><div class="bg-white h-2 w-2 rounded-full"></div></div>Aberto agora';
    document.querySelector('#open').classList.add('bg-green-500');
} else {
    document.querySelector('#open').innerHTML = '<i class="fa-regular fa-clock mr-2"></i> Abre às 10:00';
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
        DOMUtils.showElement(modal);

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
            DOMUtils.hideElement(modal);
        }
    });
});

//MODAL CART

const modalCart = document.querySelector('#modal-cart');
let rua;
let numero;
let nomeBairro;
let precoBairro;
let cep;
let referencia;
let complemento;

let nome;
let telefone;
let pagamento;
let troco;

//Função para capturar eventos dos forms
function capturaEventos() {
    //Verifica se existe o form 1 (PAGINA 1)
    const form1 = document.querySelector('#form-modal-cart-1');
    if (form1) {
        if (localStorage.getItem('rua')) {
            document.querySelector('#rua').value = localStorage.getItem('rua');
        }
        if (localStorage.getItem('numero')) {
            document.querySelector('#numero').value = localStorage.getItem('numero');
        }
        if (localStorage.getItem('cep')) {
            document.querySelector('#cep').value = localStorage.getItem('cep');
        }
        if (localStorage.getItem('referencia')) {
            document.querySelector('#referencia').value = localStorage.getItem('referencia');
        }
        if (localStorage.getItem('complemento')) {
            document.querySelector('#complemento').value = localStorage.getItem('complemento');
        }
        nomeBairro = '';

        form1.addEventListener('submit', e => {
            e.preventDefault();

            //Pegando os dados do form
            rua = document.querySelector('#rua').value;
            numero = document.querySelector('#numero').value;
            cep = document.querySelector('#cep').value;
            referencia = document.querySelector('#referencia').value;
            complemento = document.querySelector('#complemento').value;


            function setFieldBorder(selector, condition) {
                document.querySelector(selector).style.border = condition ? '1px solid red' : '1px solid #ccc';
            }

            if (!rua || !numero || !cep || !nomeBairro) {
                setFieldBorder('#rua', !rua);
                setFieldBorder('#numero', !numero);
                setFieldBorder('#cep', !cep);
                setFieldBorder('#bairro', !nomeBairro);
                showAlert('Preencha todos os campos', 'Ainda há campos vazios', false);
                return;
            }


            // Salvando os dados no localStorage
            localStorage.setItem('rua', rua);
            localStorage.setItem('numero', numero);
            localStorage.setItem('cep', cep);
            localStorage.setItem('referencia', referencia);
            localStorage.setItem('complemento', complemento);
            localStorage.setItem('bairro', nomeBairro);

            //Carrega a próxima página
            carregaPagina('modal-cart-2.html');
        });

        //Adiciona o nome e o preco para o bairro selecionado
        document.querySelector('#bairro').addEventListener('change', function () {
            let numeroBairro = this.value;

            let bairros = {
                '1': { nome: 'São Pedro', preco: 5 },
                '2': { nome: 'Gameleir', preco: 5 },
                '3': { nome: 'Morada nobre', preco: 6 },
                '4': { nome: 'Maria Cristina', preco: 6 },
                '5': { nome: 'Centro', preco: 5 },
                '6': { nome: 'Boa Vista', preco: 5 },
                '7': { nome: 'Airton Maciel', preco: 5 },
                '8': { nome: 'Cohab 1', preco: 5 },
                '9': { nome: 'Santo Antônio', preco: 6 },
                '10': { nome: 'Pontilhão', preco: 5 },
                '11': { nome: 'Édson mororó', preco: 5 },
                '12': { nome: 'Ponte nova', preco: 5 },
                '13': { nome: 'Floresta', preco: 5 },
                '14': { nome: 'Felicianos', preco: 5 },
                '15': { nome: 'São Sebastião', preco: 6 },
                '16': { nome: 'Frei Damião', preco: 7 },
                '17': { nome: 'Alto limpo', preco: 7 },
                '18': { nome: 'Viana da br', preco: 7 },
                '19': { nome: 'Bela vista', preco: 7 },
                '20': { nome: 'Barragem', preco: 7 },
                '21': { nome: 'Tereza Mendonça', preco: 7 },
                '22': { nome: 'Cohab 2', preco: 7 },
                '23': { nome: 'Cohab 3', preco: 8 },
                '24': { nome: 'Viana da faculdade', preco: 8 },
                '25': { nome: 'Heliópolis', preco: 8 },
                '26': { nome: 'Euno Andrade', preco: 8 }
            };

            if (bairros[numeroBairro]) {
                nomeBairro = bairros[numeroBairro].nome;
                precoBairro = bairros[numeroBairro].preco;
            }
        });
    }

    //Verifica se existe o form 2 (PAGINA 2)
    const form2 = document.querySelector('#form-modal-cart-2');
    if (form2) {
        if (localStorage.getItem('nome')) {
            document.querySelector('#nome').value = localStorage.getItem('nome');
        }
        if (localStorage.getItem('telefone')) {
            document.querySelector('#telefone').value = localStorage.getItem('telefone');
        }

        form2.addEventListener('submit', e => {
            e.preventDefault();

            //Pegando os dados do form
            nome = document.querySelector('#nome').value;
            telefone = document.querySelector('#telefone').value;
            pagamento = document.querySelector('#pagamento').value;
            troco = document.querySelector('#troco').value;

            //Validação dos campos
            function setFieldBorder(selector, condition) {
                document.querySelector(selector).style.border = condition ? '1px solid red' : '1px solid #ccc';
            }

            if (!nome || !telefone || !pagamento || (pagamento === 'dinheiro' && !troco)) {
                setFieldBorder('#nome', !nome);
                setFieldBorder('#telefone', !telefone);
                setFieldBorder('#pagamento', !pagamento);
                setFieldBorder('#troco', pagamento === 'dinheiro' && !troco);
                showAlert('Preencha todos os campos', 'Ainda há campos vazios', false);
                return;
            }

            localStorage.setItem('nome', nome);
            localStorage.setItem('telefone', telefone);

            carregaPagina('modal-cart-3.html');
        });

        //Evento no botão de voltar para o form 1
        const backToForm1 = document.querySelector('#back-to-form-1');
        backToForm1.addEventListener('click', e => {
            e.preventDefault();
            carregaPagina('modal-cart-1.html');
        });

        //Adicionar 'precisa de troco?' caso seja em dinheiro
        document.querySelector('#pagamento').addEventListener('change', e => {
            const selected = e.target.value;
            const troco = document.querySelector('#troco-container');

            if (selected === 'dinheiro') {
                DOMUtils.showElement(troco);
            } else {
                DOMUtils.hideElement(troco);
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

        //Enviar dados para API do WhatsApp
        const finalizarPedido = document.querySelector('#finalizar-pedido');
        finalizarPedido.addEventListener('click', e => {
            const cartItems = cart.map(item => `
• *Produto 1:* ${item.name} (Quantidade: ${item.quantity})
Preço: ${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`).join('');

            //Pegando data e hora e jogando no formato do WhatsApp
            const date = new Date();
            const data = date.toLocaleDateString('pt-BR');
            const hora = date.toLocaleTimeString('pt-BR');

            const message = encodeURIComponent(`👋 Olá! Estou enviando um pedido pelo site www.kidudu.com.

🗓 Data: ${data} ⏰ Horário: ${hora}

_Tipo de serviço: Delivery_
            
📋 *Meus Dados:*

*Nome:* ${nome}
*Telefone:* ${telefone}
*Endereço:* ${rua}, ${numero} - ${nomeBairro}, ${cep}${referencia ? ', - ' + referencia : ''}${complemento ? ', - ' + complemento : ''}
*Método de pagamento:* ${pagamento}
${pagamento === 'dinheiro' ? `• *Precisa de troco?* ${troco}
` : ''}           
💰 *Resumo do Pedido*

*Produtos:* ${subtotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
*Entrega:* ${precoBairro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
*Total a pagar:* ${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}

📝 *Detalhes do Pedido:*
${cartItems}

🚀 Aguarde um momento enquanto preparamos seu pedido. Entraremos em contato em breve para confirmar os detalhes e o prazo de entrega.`);

            const phone = '8192878433';
            //window.open(`https://wa.me/${phone}?text=${message} Endereço: qualquer`, '_blank');
            window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${message}`, '_blank');
        });

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

function showAlert(msg, description, sucess) {
    if (sucess) {
        alertIcon.innerHTML = '<div class="w-6 h-6 flex justify-center items-center"><i class="fa-solid fa-bag-shopping text-green-400" style="font-size: 16px"></i></div>';
    } else {
        alertIcon.innerHTML = '<div class="w-6 h-6 flex justify-center items-center"><i class="fa-solid fa-exclamation-circle text-red-400" style="font-size: 16px"></i></div>';
    }

    //Mostrando o alerta
    DOMUtils.showElement(alert);

    //Posicionando o alerta
    alert.style.top = `${header.offsetHeight}px`;
    alert.style.left = `calc(50% - (${alert.offsetWidth}px / 2))`;

    //Mensagem do alerta
    alertMessage.innerHTML = msg;
    alertDescription.innerHTML = description;


    alert.classList.remove('opacity-0');
    alert.style.transform = 'translateY(30px)';
    alert.classList.add('opacity-100');

    //Fechar alerta automaticamente após 5 segundos
    const tempo = setTimeout(() => {
        //Escondendo o alerta
        DOMUtils.hideElement(alert);

        alert.classList.remove('opacity-100');
        alert.style.transform = 'translateY(-30px)';
        alert.classList.add('opacity-0');
    }, 5000);

    //Fechar alerta ao clicar no botão de fechar
    alertClose.addEventListener('click', () => {
        //Escondendo o alerta
        DOMUtils.hideElement(alert);

        alert.classList.remove('opacity-100');
        alert.style.transform = 'translateY(-30px)';
        alert.classList.add('opacity-0');

        //Limpando o tempo
        clearTimeout(tempo)
    });
}

//Função que é ativada ao clicar no carrinho
function openModalCart() {
    if (cart.length <= 0) {
        showAlert('Adicione itens ao carrinho', 'Seu carrinho está vazio', sucess = false);
        return;
    };

    DOMUtils.showElement(modalCart);
    carregaPagina('modal-cart-1.html');
}

//Fechar
function closeModalCart() {
    DOMUtils.hideElement(modalCart);
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
    DOMUtils.hideElement(modal);
}

// Função de adicionar item ao carrinho
function addItem() {
    let modalQuantity = parseInt(document.querySelector('#modal-quantity').textContent);

    items += modalQuantity;
    showCountItems(); // atualizar contador

    const name = document.querySelector('#modal-title').textContent;

    showAlert('Produto adicionado', 'Finalize no carrinho', sucess = true);

    // Preço modificado
    let price = parseFloat(document.querySelector('#modal-price').textContent.replace('R$ ', '').replace(',', '.'));

    // Preço original (sem modificação) pegado do atributo data-original-price do elemento #modal-price
    let originalPrice = parseFloat(document.querySelector('#modal-price').getAttribute('data-original-price').replace('R$ ', '').replace(',', '.'));

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

let subtotalPrice;
let totalPrice;

//Função para atualizar o modal do carrinho
function updateCartModal() {
    const cartItemsContainer = document.querySelector('#cartItemsContainer');
    const cartSubtotalValue = document.querySelector('#cartSubtotalValue');
    const cartTotalValue = document.querySelector('#cartTotalValue');

    subtotalPrice = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');

        itemElement.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <div>    
                    <p class="text-red-color text-xl font-semibold">${item.name}</p>
                    <p class="text-sm">(Quantidade: ${item.quantity})</p>
                    <p class="text-sm">R$ ${item.price.toFixed(2)}</p>
                </div>
                
                <button class="remove-from-cart-btn text-gray-text font-medium" data-name="${item.name}">Remover</button>
            </div>
        `;

        subtotalPrice += item.price;

        cartItemsContainer.appendChild(itemElement);
    })

    totalPrice = subtotalPrice + precoBairro;


    //Inserindo os valores no modal cart
    cartSubtotalValue.innerHTML = subtotalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    cartTotalValue.innerHTML = `TOTAL: <span class="font-bold">${totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>`;
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