"use strict";

var _cart = _interopRequireDefault(require("./modules/cart"));

var _catalog = _interopRequireDefault(require("./modules/catalog"));

var _load = _interopRequireDefault(require("./modules/load"));

var _filter = _interopRequireDefault(require("./modules/filter"));

var _search = _interopRequireDefault(require("./modules/search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _cart["default"])();
(0, _load["default"])();
(0, _search["default"])();
(0, _catalog["default"])();
(0, _filter["default"])();
//# sourceMappingURL=index.dev.js.map
