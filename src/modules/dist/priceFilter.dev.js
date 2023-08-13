"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _renderGoods = _interopRequireDefault(require("./renderGoods"));

var _searchFilters = require("./searchFilters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var filter = function filter() {
  var minPrice = document.querySelector('#min');
  var maxPrice = document.querySelector('#max');
  minPrice.addEventListener('input', function () {
    if (maxPrice.value > 0) {
      (0, _getData["default"])().then(function (data) {
        return (0, _renderGoods["default"])((0, _searchFilters.priceFilters)(data, minPrice.value, maxPrice.value));
      });
    }
  });
  maxPrice.addEventListener('input', function () {
    if (minPrice.value > 0) {
      (0, _getData["default"])().then(function (data) {
        return (0, _renderGoods["default"])((0, _searchFilters.priceFilters)(data, minPrice.value, maxPrice.value));
      });
    }
  });
};

var _default = priceFilter;
exports["default"] = _default;
//# sourceMappingURL=priceFilter.dev.js.map
