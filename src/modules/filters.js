export const searchFilters = (goods, value) =>{
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()))
}

export const categoryFilters = (goods, value) =>{
    return goods.filter(goodsItem => goodsItem.category === value)
}

export const priceFilters = (goods, min, max) =>{
    return goods.filter(goodsItem => {
        if(min !== '' && max !== ''){
            return goodsItem.price >= +min && goodsItem.price <= +max;
        }else if(min !== '' && max === ''){
            return goodsItem.price >= +min;
        }else if(max !== '' && min === ''){
            return goodsItem.price <= +max;
        }else{
            return goodsItem
        }
    });
}

export const hotSaleFilters = (goods, value) =>{
    return goods.filter(goodsItem => {
        if(value){
            return goodsItem.sale === true;
        }else{
            return goodsItem;
        }
    });
}
