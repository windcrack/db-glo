"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var postData = function postData(cart) {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(function (res) {
    return res.json();
  });
};

var _default = postData;
exports["default"] = _default;
//# sourceMappingURL=postData.dev.js.map
