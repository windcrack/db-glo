"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hotSaleFilters = exports.priceFilters = exports.categoryFilters = exports.searchFilters = void 0;

var searchFilters = function searchFilters(goods, value) {
  return goods.filter(function (goodsItem) {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

exports.searchFilters = searchFilters;

var categoryFilters = function categoryFilters(goods, value) {
  return goods.filter(function (goodsItem) {
    return goodsItem.category === value;
  });
};

exports.categoryFilters = categoryFilters;

var priceFilters = function priceFilters(goods, min, max) {
  return goods.filter(function (goodsItem) {
    return goodsItem.price >= min && goodsItem.price <= max;
  });
};

exports.priceFilters = priceFilters;

var hotSaleFilters = function hotSaleFilters(goods, min, max) {
  return goods.filter(function (goodsItem) {
    return goodsItem.price >= min && goodsItem.price <= max;
  });
};

exports.hotSaleFilters = hotSaleFilters;
//# sourceMappingURL=searchFilters.dev.js.map
