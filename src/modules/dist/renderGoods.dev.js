"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var renderGoods = function renderGoods(goods) {
  var goodsWrapper = document.querySelector('.goods');
  localStorage.setItem('goods', JSON.stringify(goods));
  goodsWrapper.innerHTML = '';
  goods.forEach(function (goodsItem) {
    goodsWrapper.insertAdjacentHTML('beforeend', "\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n            <div class=\"card\" data-key=\"".concat(goodsItem.id, "\">\n                ").concat(goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : '', "\n                <div class=\"card-img-wrapper\">\n                    <span class=\"card-img-top\"\n                        style=\"background-image: url('").concat(goodsItem.img, "')\"></span>\n                </div>\n                <div class=\"card-body justify-content-between\">\n                    <div class=\"card-price\">").concat(goodsItem.price, " \u20BD</div>\n                    <h5 class=\"card-title\">").concat(goodsItem.title, "</h5>\n                    <button class=\"btn btn-primary\">\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button>\n                </div>\n            </div>\n        </div>\n        "));
  });
};

var _default = renderGoods;
exports["default"] = _default;
//# sourceMappingURL=renderGoods.dev.js.map
