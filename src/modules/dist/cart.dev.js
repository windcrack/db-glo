"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _renderCart = _interopRequireDefault(require("./renderCart"));

var _postData = _interopRequireDefault(require("./postData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cart = function cart() {
  var cart = document.querySelector('#cart');
  var cartModal = document.querySelector('.cart');
  var cartClose = cartModal.querySelector('.cart-close');
  var cartTotal = cartModal.querySelector('.cart-total > span');
  var cartSendBtn = cartModal.querySelector('.cart-confirm');
  var goodsWrapper = document.querySelector('.goods');
  var cartWrapper = document.querySelector('.cart-wrapper');
  var counter = document.querySelector('.counter');

  var openCart = function openCart() {
    var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    cartModal.style.display = 'flex';
    (0, _renderCart["default"])(cart);
    cartTotal.textContent = cart.reduce(function (sum, goodItem) {
      return sum += goodItem.price;
    }, 0);
  };

  var closeCart = function closeCart() {
    cartModal.style.display = '';
  };

  var cartCount = function cartCount() {
    var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    if (cart.length > 0) {
      localStorage.setItem('cartCount', cart.length);
    } else {
      localStorage.setItem('cartCount', 0);
    }

    counter.textContent = localStorage.getItem('cartCount');
  };

  cartCount();
  cart.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  goodsWrapper.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('btn-primary')) {
      var card = target.closest('.card');
      var key = card.dataset.key;
      var goods = JSON.parse(localStorage.getItem('goods'));

      var _cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

      var goodItem = goods.find(function (item) {
        return item.id === +key;
      });

      _cart.push(goodItem);

      localStorage.setItem('cart', JSON.stringify(_cart));
      cartCount();
    }
  });
  cartWrapper.addEventListener('click', function (event) {
    var target = event.target;
    var btn = target.classList.contains('btn-danger');

    if (btn) {
      var _cart2 = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

      var card = target.closest('.card');
      var key = card.dataset.key;

      var index = _cart2.findIndex(function (item) {
        return item.id === +key;
      });

      _cart2.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(_cart2));
      cartCount();
      (0, _renderCart["default"])(_cart2);
      cartTotal.textContent = _cart2.reduce(function (sum, goodItem) {
        return sum += goodItem.price;
      }, 0);
    }
  });
  cartSendBtn.addEventListener('click', function () {
    var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    (0, _postData["default"])(cart).then(function () {
      localStorage.removeItem('cart');
      (0, _renderCart["default"])([]);
      cartCount();
      cartTotal.textContent = 0;
    });
  });
};

var _default = cart;
exports["default"] = _default;
//# sourceMappingURL=cart.dev.js.map
