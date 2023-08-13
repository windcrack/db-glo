import getData from "./getData";
import renderGoods from "./renderGoods";
import { hotSaleFilters, priceFilters } from "./filters";

const filter = () =>{
    const minPrice = document.querySelector('#min');
    const maxPrice = document.querySelector('#max');
    const checkBoxInput = document.querySelector('#discount-checkbox');
    const checkBoxSpan = document.querySelector('.filter-check_checkmark');
    
    minPrice.addEventListener('input', () =>{
        getData().then(data => renderGoods(priceFilters(hotSaleFilters(data, checkBoxInput.checked), minPrice.value, maxPrice.value)));
    })

    maxPrice.addEventListener('input', () =>{
        getData().then(data => renderGoods(priceFilters(hotSaleFilters(data, checkBoxInput.checked), minPrice.value, maxPrice.value)));
    })

    checkBoxInput.addEventListener('change', () =>{
        if(checkBoxInput.checked){
            checkBoxSpan.classList.add('checked');
        }else{
            checkBoxSpan.classList.remove('checked');
        }

        getData().then(data => renderGoods(priceFilters(hotSaleFilters(data, checkBoxInput.checked), minPrice.value, maxPrice.value)));

    })
}

export default filter;