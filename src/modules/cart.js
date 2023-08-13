import renderCart from "./renderCart";
import postData from "./postData";

const cart = () =>{
    const cart = document.querySelector('#cart');
    const cartModal = document.querySelector('.cart');
    const cartClose = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const counter = document.querySelector('.counter');
    
    const openCart = () =>{
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        cartModal.style.display = 'flex';
        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum += goodItem.price;
        }, 0);
    }
    const closeCart = () =>{
        cartModal.style.display = '';
    }

    const cartCount = () =>{
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        if(cart.length > 0){
            localStorage.setItem('cartCount', cart.length);
        }else{
            localStorage.setItem('cartCount', 0);
        }
        counter.textContent = localStorage.getItem('cartCount');
    }

    cartCount();

    cart.addEventListener('click', openCart);
    cartClose.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', (event) =>{
        let target = event.target;

        if(target.classList.contains('btn-primary')){
            const card = target.closest('.card');
            const key = card.dataset.key;
            const goods =JSON.parse(localStorage.getItem('goods'));
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const goodItem = goods.find(item => item.id === +key);

            cart.push(goodItem);
            
            localStorage.setItem('cart', JSON.stringify(cart));
            cartCount();
        }
    })

    cartWrapper.addEventListener('click', event =>{
        let target = event.target;
        let btn = target.classList.contains('btn-danger');
        if(btn){
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
            const card = target.closest('.card');
            const key = card.dataset.key;
            const index = cart.findIndex((item) => {
              return item.id === +key;
            });

            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));
            cartCount();
            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum += goodItem.price;
            }, 0);
            
        }
    })

    cartSendBtn.addEventListener('click', () =>{
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

        postData(cart).then(() =>{
            localStorage.removeItem('cart');
            renderCart([]);
            cartTotal.textContent = 0;
        });
    })
}

export default cart;