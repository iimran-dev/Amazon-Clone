import { renderOrderSummary } from './checkout/orderSummary.js';   
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
  /*Practice for Object oriented programming*/
//import '../data/cart-oop.js';

async function loadPage(){
    try{
    await loadProductsFetch();
    await new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
    } catch(error){
        console.log('Error loading page data:', error);
    }

    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        }); 
    })
]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });

}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        }); 
    });

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/