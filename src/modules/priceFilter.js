import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilters } from "./searchFilters";

const priceFilter = () =>{
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');
    
    minPrice.addEventListener('input', () =>{
        if(maxPrice.value > 0){
            getData().then(data => renderGoods(priceFilters(data, minPrice.value, maxPrice.value)));
        }
    })

    maxPrice.addEventListener('input', () =>{
        if(minPrice.value > 0){
            getData().then(data => renderGoods(priceFilters(data, minPrice.value, maxPrice.value)));
        }
    })

    
}

export default priceFilter;