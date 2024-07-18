/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var DOMUtils = {
  showElement: function showElement(element) {
    element.classList.remove('hidden');
    element.classList.add('flex');
  },
  hideElement: function hideElement(element) {
    element.classList.remove('flex');
    element.classList.add('hidden');
  },
  toggleElement: function toggleElement(element) {
    element.classList.toggle('hidden');
  }
};

//Menu Navbar - Mobile
var menuMobile = document.querySelector('#menu-mobile');
var cart = [];

//Variáveis do alerta
var alert = document.querySelector('#alert');
var alertMessage = document.querySelector('#alert-message');
var alertClose = document.querySelector('#alert-close');
var alertDescription = document.querySelector('#alert-description');
var header = document.querySelector('header');
function openMenu() {
  DOMUtils.showElement(menuMobile);
}
function closeMenu() {
  DOMUtils.hideElement(menuMobile);
}

//Criação de um evento para sombra no header
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY - header.offsetHeight;
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
var am = document.querySelector('#accordion-menu');
var minusMenu = document.querySelector('#minus-menu');
var plusMenu = document.querySelector('#plus-menu');
function openMenuAccordion() {
  DOMUtils.toggleElement(am);
  DOMUtils.toggleElement(minusMenu);
  DOMUtils.toggleElement(plusMenu);
}

//Accordion de Contato - Mobile
var ac = document.querySelector('#accordion-contact');
var minusContact = document.querySelector('#minus-contact');
var plusContact = document.querySelector('#plus-contact');
function openContactAccordion() {
  DOMUtils.toggleElement(ac);
  DOMUtils.toggleElement(minusContact);
  DOMUtils.toggleElement(plusContact);
}

// HORA DE FUNCIONAMENTO

//Verificar se a hora atual está entre 10h e 18h

function verificaHora() {
  var date = new Date();
  var hour = date.getHours();
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

var slides = document.querySelector('#slides');

//Carrossel automático
setInterval(function () {
  slides.style.transition = 'transform 1s ease-in-out';
  slides.style.transform = 'translateX(-100%)';
}, 10000);
setInterval(function () {
  slides.style.transform = 'translateX(0)';
}, 20000);

//Botões de controle do carrossel
var btn2 = document.querySelector('#btn2');
var btn1 = document.querySelector('#btn1');

//Mudando a cor dos botões de acordo com o slide
setInterval(function () {
  btn2.style.backgroundColor = '#000';
  btn1.style.backgroundColor = '#A5A5A5';
}, 10000);
setInterval(function () {
  btn1.style.backgroundColor = '#000';
  btn2.style.backgroundColor = '#A5A5A5';
}, 20000);

//Se o usuário clicar no botão 1, o slide vai para o primeiro
btn1.addEventListener('click', function () {
  slides.style.transition = 'transform 1s ease-in-out';
  slides.style.transform = 'translateX(0)';
  btn1.style.backgroundColor = '#000';
  btn2.style.backgroundColor = '#A5A5A5';
});

//Se o usuário clicar no botão 2, o slide vai para o segundo
btn2.addEventListener('click', function () {
  slides.style.transition = 'transform 1s ease-in-out';
  slides.style.transform = 'translateX(-100%)';
  btn2.style.backgroundColor = '#000';
  btn1.style.backgroundColor = '#A5A5A5';
});

// PRODUTOS E MODAL

// Selecionando todos os produtos
var products = document.querySelectorAll('.produto');
// Adicionando um evento de clique a cada produto
products.forEach(function (product) {
  product.addEventListener('click', function () {
    var quantity = 1;

    //Abrindo modal ao clicar no produto
    var modal = document.querySelector('#modal');
    DOMUtils.showElement(modal);

    // Pegando os dados do produto clicado
    var img = product.querySelector('img').src;
    var alt = product.querySelector('img').alt;
    var title = product.querySelector('h3').textContent;
    var price = product.querySelector('.price').textContent;
    var productId = product.getAttribute('data-product-id');
    var description = '';

    // Verificando qual é o produto clicado e exibindo a descrição correspondente
    switch (productId) {
      case '1':
        description = 'Delicie-se com o sabor clássico e irresistível do nosso kidudu Sensação. Combinando o sabor do morango e um toque de chocolate, ele é perfeito para refrescar e adoçar o seu dia.';
        break;
      case '2':
        description = 'Experimente o nosso kidudu de Paçoca, que traz todo o gostinho da tradicional paçoca em uma versão gelada e cremosa. Ideal para quem ama o sabor do amendoim.';
        break;
      case '3':
        description = 'Para os chocólatras de plantão, o kidudu de Chocolate é uma escolha certeira. Feito com chocolate de alta qualidade, ele é cremoso, saboroso e vai conquistar seu paladar.';
        break;
      case '4':
        description = 'Refresque-se com o sabor leve e frutado do kidudu de Maçã Verde. Perfeito para os dias quentes, é uma opção deliciosa e refrescante.';
        break;
      case '5':
        description = 'O kidudu Baba Azul é a escolha perfeita para quem adora um toque de nostalgia. Com um sabor doce e refrescante, ele vai trazer boas lembranças da infância.';
        break;
      case '6':
        description = 'Para os amantes de sabores tropicais, o kidudu de Mousse de Maracujá é irresistível. Cremoso e com o toque azedinho do maracujá, é uma verdadeira delícia.';
        break;
      case '7':
        description = 'Se você prefere algo mais cítrico, o kidudu de Mousse de Limão é a escolha ideal. Com a combinação perfeita de doce e azedo, ele é refrescante e saboroso.';
        break;
      case '8':
        description = 'Nosso kidudu Delícia de Abacaxi é uma explosão de sabor tropical. Feito com pedaços de abacaxi e uma cremosidade irresistível, é perfeito para quem busca um sabor premium e refrescante.';
        break;
      case '9':
        description = 'Se você é fã de sobremesas clássicas, vai adorar o kidudu de Pudim. Com um sabor suave e aveludado, ele é uma verdadeira delícia em forma de kidudu.';
        break;
      case '10':
        description = 'A combinação perfeita de queijo com goiabada agora em versão kidudu. O sabor Romeu e Julieta é uma opção sofisticada e deliciosa para quem busca algo diferente e saboroso.';
        break;
      case '11':
        description = 'O kidudu Oreo é uma explosão de sabor. Feito com pedaços do clássico biscoito Oreo e uma cremosidade irresistível, é perfeito para quem busca um sabor premium e delicioso.';
        break;
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
    var modalQuantity = document.querySelector('#modal-quantity');
    var modalBtn1 = document.querySelector('#modal-btn1');
    var modalBtn2 = document.querySelector('#modal-btn2');
    function updateQuantity() {
      modalQuantity.innerHTML = quantity;
    }
    function updatePrice() {
      var priceElement = parseFloat(price.replace('R$ ', '').replace(',', '.'));
      var totalPrice = priceElement * quantity;
      document.querySelector('#modal-price').innerHTML = "R$ ".concat(totalPrice.toFixed(2));
    }

    // evento de clique ao botão de remover
    modalBtn1.addEventListener('click', function () {
      if (quantity > 1) {
        quantity--;
        updateQuantity();
        updatePrice();
      }
    });

    // evento de clique ao botão de adicionar
    modalBtn2.addEventListener('click', function () {
      if (quantity < 99) {
        quantity++;
        updateQuantity();
        updatePrice();
      }
    });

    // Fechar o modal se clicar fora dele
    modal.addEventListener('click', function (event) {
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

var modalCart = document.querySelector('#modal-cart');
var rua;
var numero;
var nomeBairro;
var precoBairro;
var cep;
var referencia;
var complemento;
var nome;
var telefone;
var pagamento;
var troco;

//Função para capturar eventos dos forms
function capturaEventos() {
  //Verifica se existe o form 1 (PAGINA 1)
  var form1 = document.querySelector('#form-modal-cart-1');
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
    form1.addEventListener('submit', function (e) {
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
      var numeroBairro = this.value;
      var bairros = {
        '1': {
          nome: 'São Pedro',
          preco: 5
        },
        '2': {
          nome: 'Gameleir',
          preco: 5
        },
        '3': {
          nome: 'Morada nobre',
          preco: 6
        },
        '4': {
          nome: 'Maria Cristina',
          preco: 6
        },
        '5': {
          nome: 'Centro',
          preco: 5
        },
        '6': {
          nome: 'Boa Vista',
          preco: 5
        },
        '7': {
          nome: 'Airton Maciel',
          preco: 5
        },
        '8': {
          nome: 'Cohab 1',
          preco: 5
        },
        '9': {
          nome: 'Santo Antônio',
          preco: 6
        },
        '10': {
          nome: 'Pontilhão',
          preco: 5
        },
        '11': {
          nome: 'Édson mororó',
          preco: 5
        },
        '12': {
          nome: 'Ponte nova',
          preco: 5
        },
        '13': {
          nome: 'Floresta',
          preco: 5
        },
        '14': {
          nome: 'Felicianos',
          preco: 5
        },
        '15': {
          nome: 'São Sebastião',
          preco: 6
        },
        '16': {
          nome: 'Frei Damião',
          preco: 7
        },
        '17': {
          nome: 'Alto limpo',
          preco: 7
        },
        '18': {
          nome: 'Viana da br',
          preco: 7
        },
        '19': {
          nome: 'Bela vista',
          preco: 7
        },
        '20': {
          nome: 'Barragem',
          preco: 7
        },
        '21': {
          nome: 'Tereza Mendonça',
          preco: 7
        },
        '22': {
          nome: 'Cohab 2',
          preco: 7
        },
        '23': {
          nome: 'Cohab 3',
          preco: 8
        },
        '24': {
          nome: 'Viana da faculdade',
          preco: 8
        },
        '25': {
          nome: 'Heliópolis',
          preco: 8
        },
        '26': {
          nome: 'Euno Andrade',
          preco: 8
        }
      };
      if (bairros[numeroBairro]) {
        nomeBairro = bairros[numeroBairro].nome;
        precoBairro = bairros[numeroBairro].preco;
      }
    });
  }

  //Verifica se existe o form 2 (PAGINA 2)
  var form2 = document.querySelector('#form-modal-cart-2');
  if (form2) {
    if (localStorage.getItem('nome')) {
      document.querySelector('#nome').value = localStorage.getItem('nome');
    }
    if (localStorage.getItem('telefone')) {
      document.querySelector('#telefone').value = localStorage.getItem('telefone');
    }
    form2.addEventListener('submit', function (e) {
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
      if (!nome || !telefone || !pagamento || pagamento === 'dinheiro' && !troco) {
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
    var backToForm1 = document.querySelector('#back-to-form-1');
    backToForm1.addEventListener('click', function (e) {
      e.preventDefault();
      carregaPagina('modal-cart-1.html');
    });

    //Adicionar 'precisa de troco?' caso seja em dinheiro
    document.querySelector('#pagamento').addEventListener('change', function (e) {
      var selected = e.target.value;
      var troco = document.querySelector('#troco-container');
      if (selected === 'dinheiro') {
        DOMUtils.showElement(troco);
      } else {
        DOMUtils.hideElement(troco);
      }
    });
  }

  //Verifica se existe o botão de voltar para o form 2 (PAGINA 3)
  var backToForm2 = document.querySelector('#back-to-form-2');
  if (backToForm2) {
    backToForm2.addEventListener('click', function (e) {
      e.preventDefault();
      carregaPagina('modal-cart-2.html');
    });

    //Atualiza o modal do carrinho
    updateCartModal();
    eventRemoveCartItem();

    //Enviar dados para API do WhatsApp
    var finalizarPedido = document.querySelector('#finalizar-pedido');
    finalizarPedido.addEventListener('click', function (e) {
      var cartItems = cart.map(function (item) {
        return "\n\u2022 *Produto 1:* ".concat(item.name, " (Quantidade: ").concat(item.quantity, ")\nPre\xE7o: ").concat(item.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }));
      }).join('');

      //Pegando data e hora e jogando no formato do WhatsApp
      var date = new Date();
      var data = date.toLocaleDateString('pt-BR');
      var hora = date.toLocaleTimeString('pt-BR');
      var message = encodeURIComponent("\uD83D\uDC4B Ol\xE1! Estou enviando um pedido pelo site www.kidudu.com.\n\n\uD83D\uDDD3 Data: ".concat(data, " \u23F0 Hor\xE1rio: ").concat(hora, "\n\n_Tipo de servi\xE7o: Delivery_\n            \n\uD83D\uDCCB *Meus Dados:*\n\n*Nome:* ").concat(nome, "\n*Telefone:* ").concat(telefone, "\n*Endere\xE7o:* ").concat(rua, ", ").concat(numero, " - ").concat(nomeBairro, ", ").concat(cep).concat(referencia ? ', - ' + referencia : '').concat(complemento ? ', - ' + complemento : '', "\n*M\xE9todo de pagamento:* ").concat(pagamento, "\n").concat(pagamento === 'dinheiro' ? "\u2022 *Precisa de troco?* ".concat(troco, "\n") : '', "           \n\uD83D\uDCB0 *Resumo do Pedido*\n\n*Produtos:* ").concat(subtotalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }), "\n*Entrega:* ").concat(precoBairro.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }), "\n*Total a pagar:* ").concat(totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }), "\n\n\uD83D\uDCDD *Detalhes do Pedido:*\n").concat(cartItems, "\n\n\uD83D\uDE80 Aguarde um momento enquanto preparamos seu pedido. Entraremos em contato em breve para confirmar os detalhes e o prazo de entrega."));
      var phone = '8192878433';
      //window.open(`https://wa.me/${phone}?text=${message} Endereço: qualquer`, '_blank');
      window.open("https://api.whatsapp.com/send?phone=".concat(phone, "&text=").concat(message), '_blank');
    });
  }
}

//Captura os eventos dos forms inicialmente
capturaEventos();

//Função para carregar a próxima página
function carregaPagina(_x) {
  return _carregaPagina.apply(this, arguments);
} //Jogando o resultado da requisição Fetch API na div .result
function _carregaPagina() {
  _carregaPagina = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(href) {
    var response, html;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(href);
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 6;
            break;
          }
          throw new Error('ERRO 404');
        case 6:
          _context.next = 8;
          return response.text();
        case 8:
          html = _context.sent;
          carregaResultado(html);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _carregaPagina.apply(this, arguments);
}
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
  alert.style.top = "".concat(header.offsetHeight, "px");
  alert.style.left = "calc(50% - (".concat(alert.offsetWidth, "px / 2))");

  //Mensagem do alerta
  alertMessage.innerHTML = msg;
  alertDescription.innerHTML = description;
  alert.classList.remove('opacity-0');
  alert.style.transform = 'translateY(30px)';
  alert.classList.add('opacity-100');

  //Fechar alerta automaticamente após 5 segundos
  var tempo = setTimeout(function () {
    //Escondendo o alerta
    DOMUtils.hideElement(alert);
    alert.classList.remove('opacity-100');
    alert.style.transform = 'translateY(-30px)';
    alert.classList.add('opacity-0');
  }, 5000);

  //Fechar alerta ao clicar no botão de fechar
  alertClose.addEventListener('click', function () {
    //Escondendo o alerta
    DOMUtils.hideElement(alert);
    alert.classList.remove('opacity-100');
    alert.style.transform = 'translateY(-30px)';
    alert.classList.add('opacity-0');

    //Limpando o tempo
    clearTimeout(tempo);
  });
}

//Função que é ativada ao clicar no carrinho
function openModalCart() {
  if (cart.length <= 0) {
    showAlert('Adicione itens ao carrinho', 'Seu carrinho está vazio', sucess = false);
    return;
  }
  ;
  DOMUtils.showElement(modalCart);
  carregaPagina('modal-cart-1.html');
}

//Fechar
function closeModalCart() {
  DOMUtils.hideElement(modalCart);
}

//Fechar ao clicar fora dele
modalCart.addEventListener('click', function (event) {
  if (event.target === modalCart) {
    closeModalCart();
  }
});

// HEADER - Contador de itens no carrinho

var items = 0;
function showCountItems() {
  var elementItems = document.querySelector('#items');
  elementItems.innerHTML = items;
}
showCountItems();

// MODAL - Adicionando itens ao carrinho (Ao clicar no botão de adicionar)

function closeModal() {
  DOMUtils.hideElement(modal);
}

// Função de adicionar item ao carrinho
function addItem() {
  var modalQuantity = parseInt(document.querySelector('#modal-quantity').textContent);
  items += modalQuantity;
  showCountItems(); // atualizar contador

  var name = document.querySelector('#modal-title').textContent;
  showAlert('Produto adicionado', 'Finalize no carrinho', sucess = true);

  // Preço modificado
  var price = parseFloat(document.querySelector('#modal-price').textContent.replace('R$ ', '').replace(',', '.'));

  // Preço original (sem modificação) pegado do atributo data-original-price do elemento #modal-price
  var originalPrice = parseFloat(document.querySelector('#modal-price').getAttribute('data-original-price').replace('R$ ', '').replace(',', '.'));

  // Se o produto já existir, 'existingItems' recebe true
  var existingItems = cart.find(function (product) {
    return product.name === name;
  });

  // Se existir, incrementa a quantidade e o preço
  if (existingItems) {
    existingItems.quantity += modalQuantity;
    existingItems.price += price;
    closeModal();
    updateCartModal();
    eventRemoveCartItem();
  } else {
    //Senão, cria um novo produto
    var product = {
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
var subtotalPrice;
var totalPrice;

//Função para atualizar o modal do carrinho
function updateCartModal() {
  var cartItemsContainer = document.querySelector('#cartItemsContainer');
  var cartSubtotalValue = document.querySelector('#cartSubtotalValue');
  var cartTotalValue = document.querySelector('#cartTotalValue');
  subtotalPrice = 0;
  cartItemsContainer.innerHTML = '';
  cart.forEach(function (item) {
    var itemElement = document.createElement('div');
    itemElement.innerHTML = "\n            <div class=\"flex items-center justify-between mb-4\">\n                <div>    \n                    <p class=\"text-red-color text-xl font-semibold\">".concat(item.name, "</p>\n                    <p class=\"text-sm\">(Quantidade: ").concat(item.quantity, ")</p>\n                    <p class=\"text-sm\">R$ ").concat(item.price.toFixed(2), "</p>\n                </div>\n                \n                <button class=\"remove-from-cart-btn text-gray-text font-medium\" data-name=\"").concat(item.name, "\">Remover</button>\n            </div>\n        ");
    subtotalPrice += item.price;
    cartItemsContainer.appendChild(itemElement);
  });
  totalPrice = subtotalPrice + precoBairro;

  //Inserindo os valores no modal cart
  cartSubtotalValue.innerHTML = subtotalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  cartTotalValue.innerHTML = "TOTAL: <span class=\"font-bold\">".concat(totalPrice.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }), "</span>");
}

//Função para remover item do carrinho
function eventRemoveCartItem() {
  //Escutador de eventos no container do carrinho
  cartItemsContainer.addEventListener('click', function (event) {
    //Verificando se o botão clicado é o de remover
    if (event.target.classList.contains('remove-from-cart-btn')) {
      var name = event.target.getAttribute('data-name');
      removeItemCart(name);
    }
  });

  //Função para remover item do carrinho (e depois atualizar o modal) com base em seu nome
  function removeItemCart(name) {
    var index = cart.findIndex(function (item) {
      return item.name === name;
    });

    // Se o o findIndex retornar -1, o item não existe
    if (index !== -1) {
      var item = cart[index];

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
/******/ })()
;
//# sourceMappingURL=bundle.js.map