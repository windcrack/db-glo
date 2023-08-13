import getData from "./getData";
import renderGoods from "./renderGoods";
import { searchFilters } from "./filters";

const search = () =>{
    const search = document.querySelector('.search-wrapper_input');

    search.addEventListener('input', (event) =>{
        let value = event.target.value;

        getData().then(data => renderGoods(searchFilters(data, value)));
    })
}

export default search;