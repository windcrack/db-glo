"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var renderCart = function renderCart(goods) {
  var cartWrapper = document.querySelector('.cart-wrapper');
  cartWrapper.innerHTML = '';

  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML('beforeend', "\n            <div id=\"cart-empty\">\n                \u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430 \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u0430\n            </div>\n        ");
  }

  goods.forEach(function (goodsItem) {
    cartWrapper.insertAdjacentHTML('beforeend', "\n            <div class=\"card\" data-key=\"".concat(goodsItem.id, "\">\n                ").concat(goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : '', "\n                <div class=\"card-img-wrapper\">\n                    <span class=\"card-img-top\"\n                        style=\"background-image: url('").concat(goodsItem.img, "')\"></span>\n                </div>\n                <div class=\"card-body justify-content-between\">\n                    <div class=\"card-price\">").concat(goodsItem.price, " \u20BD</div>\n                    <h5 class=\"card-title\">").concat(goodsItem.title, "</h5>\n                    <button class=\"btn btn-danger\">\u0423\u0434\u0430\u043B\u0438\u0442\u044C</button>\n                </div>\n            </div>\n        "));
  });
};

var _default = renderCart;
exports["default"] = _default;
//# sourceMappingURL=renderCart.dev.js.map
