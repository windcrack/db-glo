"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _renderGoods = _interopRequireDefault(require("./renderGoods"));

var _filters = require("./filters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var search = function search() {
  var search = document.querySelector('.search-wrapper_input');
  search.addEventListener('input', function (event) {
    var value = event.target.value;
    (0, _getData["default"])().then(function (data) {
      return (0, _renderGoods["default"])((0, _filters.searchFilters)(data, value));
    });
  });
};

var _default = search;
exports["default"] = _default;
//# sourceMappingURL=search.dev.js.map
