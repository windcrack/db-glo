"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var getData = function getData() {
  return fetch('../../db/db.json').then(function (response) {
    return response.json();
  });
};

var _default = getData;
exports["default"] = _default;
//# sourceMappingURL=getData.dev.js.map
