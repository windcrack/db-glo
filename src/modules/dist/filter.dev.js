"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _renderGoods = _interopRequireDefault(require("./renderGoods"));

var _filters = require("./filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filter = function filter() {
  var minPrice = document.querySelector('#min');
  var maxPrice = document.querySelector('#max');
  var checkBoxInput = document.querySelector('#discount-checkbox');
  var checkBoxSpan = document.querySelector('.filter-check_checkmark');
  minPrice.addEventListener('input', function () {
    (0, _getData["default"])().then(function (data) {
      return (0, _renderGoods["default"])((0, _filters.priceFilters)((0, _filters.hotSaleFilters)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
    });
  });
  maxPrice.addEventListener('input', function () {
    (0, _getData["default"])().then(function (data) {
      return (0, _renderGoods["default"])((0, _filters.priceFilters)((0, _filters.hotSaleFilters)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
    });
  });
  checkBoxInput.addEventListener('change', function () {
    if (checkBoxInput.checked) {
      checkBoxSpan.classList.add('checked');
    } else {
      checkBoxSpan.classList.remove('checked');
    }

    (0, _getData["default"])().then(function (data) {
      return (0, _renderGoods["default"])((0, _filters.priceFilters)((0, _filters.hotSaleFilters)(data, checkBoxInput.checked), minPrice.value, maxPrice.value));
    });
  });
};

var _default = filter;
exports["default"] = _default;
//# sourceMappingURL=filter.dev.js.map
