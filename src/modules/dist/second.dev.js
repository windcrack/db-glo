"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("./getData"));

var _postData = _interopRequireDefault(require("./postData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var second = function second() {
  var cartBtn = document.querySelector('#cart');
  (0, _getData["default"])().then(function (data) {
    return console.log(data);
  });
};

var _default = second;
exports["default"] = _default;
//# sourceMappingURL=second.dev.js.map
