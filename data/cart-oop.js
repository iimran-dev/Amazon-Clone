function Cart(localStorageKey){
    const cart={
    cartItems: undefined,

   loadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

        if (!this.cartItems){
        this.cartItems = [
        {
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }, 
        {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId: '2'
        }];
    }},

    saveStorage(){
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    
    addTocart(productId){
      // Get selected quantity
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

      const selectedQuantity = quantitySelector? Number(quantitySelector.value): 1;

      // Add product to cart data
      let matchingItem;

      this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }});

      if (matchingItem) {
        matchingItem.quantity += selectedQuantity;
      } else {
        this.cartItems.push({
          productId: productId,
          quantity: selectedQuantity,
          deliveryOptionId : '1'
        });
      }

        this.saveStorage();

        if(quantitySelector){
            quantitySelector.value=1;
        }
    },

    removeCartItem(producId){
      let newCart= [];
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== producId){
          newCart.push(cartItem)
        }
      });
      this.cartItems = newCart;

      this.saveStorage();
    },

   updateDeliveryOption(productId, newDeliveryOptionId){
   let matchingItem;

      this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }});

      if (!matchingItem) {
      return;
    }

      matchingItem.deliveryOptionId = newDeliveryOptionId;

      this.saveStorage();
  },

   calculateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  },

  updateQuantity(productId, newQuantity){
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId === productId){
          cartItem.quantity = newQuantity;
        };
    });
    this.saveStorage();
  }
};
    return cart
}





cart.loadFromStorage(); 
