import getData from "./getData";
import renderGoods from "./renderGoods";
import { categoryFilters } from "./searchFilters";

const catalog = () =>{
    const catalogButton = document.querySelector('.catalog-button > button');
    const catalog = document.querySelector('.catalog');
    const catalogModalItems = document.querySelectorAll('.catalog li');

    let isOpen = false;


    catalogButton.addEventListener('click', () =>{
        isOpen = !isOpen;
        catalog.style.display = `${isOpen ? 'block' : ''}`;
    })

    catalogModalItems.forEach(item =>{
        item.addEventListener('click', () =>{
            let text = item.textContent;

            getData().then(data => renderGoods(categoryFilters(data, text)));
        })
    })
}

export default catalog;