
export let cart;

loadFromStorage(); 

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart = [];
  }
};

export function saveStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}



export function addTocart(productId){
      // Get selected quantity
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

      const selectedQuantity = quantitySelector? Number(quantitySelector.value): 1;

      // Add product to cart data
      let matchingItem;

      cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }});

      if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
      } else {
        cart.push({
          productId: productId,
          quantity: selectedQuantity,
          deliveryOptionId : '1'
        });
      }

      saveStorage();

      if(quantitySelector){
        quantitySelector.value=1;
      }
    }


    export function removeCartItem(producId){
      let newCart= [];
      cart.forEach((cartItem)=>{
        if(cartItem.productId !== producId){
          newCart.push(cartItem)
        }
      });
      cart = newCart;

      saveStorage();
    }

    export function calculateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  }

    export function updateQuantity(productId, newQuantity){
      cart.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          cartItem.quantity = newQuantity;
        };
    });
    saveStorage();
  };

  export function updateDeliveryOption(productId, newDeliveryOptionId){
   let matchingItem;

      cart.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }});

      if (!matchingItem) {
      return;
    }

      matchingItem.deliveryOptionId = newDeliveryOptionId;

      saveStorage();
  };

  export function loadCart(fn){
   const xhr = new XMLHttpRequest();
   xhr.addEventListener('load', ()=>{
      console.log(xhr.response)
      fn();
   })
   xhr.open('GET', 'https://supersimplebackend.dev/cart');
   xhr.send();
  }