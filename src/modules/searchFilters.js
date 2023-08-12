export const searchFilters = (goods, value) =>{
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()))
}

export const categoryFilters = (goods, value) =>{
    return goods.filter(goodsItem => goodsItem.category === value)
}

export const priceFilters = (goods, min, max) =>{
    return goods.filter(goodsItem => goodsItem.price >= min && goodsItem.price <= max);
}
