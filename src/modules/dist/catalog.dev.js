"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _renderGoods = _interopRequireDefault(require("./renderGoods"));

var _filters = require("./filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var catalog = function catalog() {
  var catalogButton = document.querySelector('.catalog-button > button');
  var catalog = document.querySelector('.catalog');
  var catalogModalItems = document.querySelectorAll('.catalog li');
  var isOpen = false;
  catalogButton.addEventListener('click', function () {
    isOpen = !isOpen;
    catalog.style.display = "".concat(isOpen ? 'block' : '');
  });
  catalogModalItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var text = item.textContent;
      (0, _getData["default"])().then(function (data) {
        return (0, _renderGoods["default"])((0, _filters.categoryFilters)(data, text));
      });
    });
  });
};

var _default = catalog;
exports["default"] = _default;
//# sourceMappingURL=catalog.dev.js.map
